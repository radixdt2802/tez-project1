import COMPONENT_NAMES from '../config/component-names';
import QueryStringResolver from "./query-string.resolver";
import jsonToString from "./json-to-string"
import removeSpace from './remove-space';
import DataResolver from './typed-query/data-resolver'
import FieldSelector from './typed-query/selector';
import {QUERY_FIELD_SELECTOR} from './query-field-selector'
import Query from './typed-query/query';
import UrlReplacer from './url-replacer'
import getStrapiMedia from './strapi-media'
import removeUnwantedSanitizer from './sanitizers/remove-unwanted.sanitizer'
import readingtime from './sanitizers/reading-time';
import getComponentRef from './sanitizers/get-component-refecode.sanitizer';
import { paginate } from './source-paginate';
const contentProvider = async function (pageContent:any, url:any, $strapi:any, dynamicData:any) {
    var GenericSection = [];
    pageContent = await DataResolver(pageContent, url, $strapi);
    if (pageContent && pageContent.GenericSection)
        GenericSection = pageContent.GenericSection;
    var Tag = {
        title: '', Link: {}, MetaPropertyTags: [], MetaNameTags: [], PageSchema: ''
    };
    var components:any = [];
    var wordsPerMinute = 250;
    var regex = /<(.|\n)[^>]*?>/g;
    for (var i = 0; i < GenericSection.length; i++) {
        var item:any = GenericSection[i];
        item.TitleReferenceCode = item.VueReferenceCode.includes("#") ? item.VueReferenceCode.split("#")[1] : 'D';
        item.VueReferenceCode = item.VueReferenceCode.includes("#") ? item.VueReferenceCode.split("#")[0] : item.VueReferenceCode;
        let componentName = removeSpace(getComponentRef(item['VueReferenceCode']) || item['__component']);
        item.dynamic = dynamicData;
        if (COMPONENT_NAMES[componentName]) {
            if ((item['__component'] === "data-control.get-all-data" || item['__component'] === "data-control.get-data-by-field-value") && QUERY_FIELD_SELECTOR[COMPONENT_NAMES[componentName]]) {
                var query:any = {};
                if (item['__component'] === "data-control.get-data-by-field-value")
                    query[item.Field] = item.Value;
                var queryResult = await Query({ entity: item.CollectionType, query: query }, item, $strapi);

                if (componentName == "Blog_Listing" && queryResult && Array.isArray(queryResult)) {
                  queryResult.forEach((t:any) => {
                    if (t.VueReferenceCode == "Blog_details") {
                      t["ReadingTime"] = readingtime(t.LongText, wordsPerMinute, regex);
                    }
                  });
                } 
                
                var result = FieldSelector(queryResult, QUERY_FIELD_SELECTOR[COMPONENT_NAMES[componentName]]);
                //result.forEach((t:any) => { t.hide = false });
                if(componentName === "Blog_Listing" && url === "/blog"){
                    var queryString = jsonToString(QueryStringResolver({query:query}, item.CollectionType));
                    item.dynamicSourcePath = paginate(result,componentName,queryString);
                }else{
                    try{
                        item.dynamicResult = typeof result === "string"? JSON.parse(result) : result ;
                    } catch(x) {
                        item.dynamicResult = result;
                    }
                }
            }
            var randomNumber:any = Math.random() * 10000000;
            components.push({ hide: process.env.FULL_PRERENDER, id:parseInt(randomNumber) , name: COMPONENT_NAMES[componentName], style: { 'min-height': '699px' }, data: removeUnwantedSanitizer(item), serverBinding: i > 2 ? false : true });
        }
        else if (item['__component'] === "tags.meta-tags" || item['__component'] === "tags.seo") {
            tagBuilder(item, Tag);
        }
    }
    if (dynamicData && dynamicData.metaTags)
        tagBuilder(dynamicData.metaTags, Tag);
    if (dynamicData && dynamicData.seo)
        tagBuilder(dynamicData.seo, Tag);

    if (Object.keys(Tag.Link).length === 0)
        Tag.Link = { rel: 'canonical', href: (url.indexOf("http://") !== -1 || url.indexOf("https://") !== -1) ? url: process.env.SITE_URL + UrlReplacer(url) };
    var removeIndex:any = [];
    components.forEach((component:any, index:any) => {
        if (component.data.ComponentReferencePath) {
            var componentNames = component.data.ComponentReferencePath.split(".");
            componentNames.forEach((t:any) => {
                var componentName = COMPONENT_NAMES[t]
                var referenceComponent = components.filter((x:any) => x.name === componentName)[0];
                if (referenceComponent && referenceComponent.data) {

                    if (!referenceComponent.data[component.name])
                        referenceComponent.data[component.name] = {};
                    referenceComponent.data[component.name] = component;
                    removeIndex.push(component);
                }
            })
        }
    })
    removeIndex.forEach((t:any) => {
        var indexOf = components.indexOf(t);
        if (indexOf !== -1)
            components.splice(indexOf, 1);

    })
    //removeIndex.forEach((t, index) => { var indexNumber = index === 0 ? index : t - index; components.splice(indexNumber, 1) });
    let indexedComponents = components.filter((t:any)=>t.data.ComponentOrder !== undefined && t.ComponentOrder !== null)
    
    
    if(indexedComponents.length > 0){
        let cloneComponents = components.filter((t:any)=>t.data.ComponentOrder === undefined || t.ComponentOrder === null);
        let componentSnapshots:any = [];
        cloneComponents.forEach((item:any,index:any)=>{
            var changeIndex = indexedComponents.filter((t:any)=>t.data.ComponentOrder === index)[0]
            if(changeIndex){
                componentSnapshots.push(changeIndex);
                componentSnapshots.push(item)
            }else{
                componentSnapshots.push(item)
            }
        })
        components = componentSnapshots.length == 0 ? components : componentSnapshots;
    }
    return {
        components: components, tags: Tag, siteMap: siteMapGenerator(pageContent, url, Tag)
    };
}


function tagBuilder(data:any, tag:any) {
    if (data.PageSchema)
        tag.PageSchema = data.PageSchema;
    if (data.MetaTitle)
        tag.title = data.MetaTitle;
    if (data.MetaDescription)
        tag.MetaNameTags.push({ type: 'name', title: 'description', content: data.MetaDescription });
    if (data.MetaKeywords)
        tag.MetaNameTags.push({ type: 'name', title: 'keywords', content: data.MetaKeywords });

    if (data.LinkTags)
        data.LinkTags.forEach((t:any) => {
            console.log(data.LinkTags);
            tag.Link = { rel: 'canonical', href:(t.Href.indexOf("http://") !== -1 || t.Href.indexOf("https://") !== -1) ? t.Href: process.env.SITE_URL + t.Href };
        });
        

    if (data.MetaNameTag)
        data.MetaNameTag.forEach((t:any) => {
            if (t.Content && t.Name) {
                if (t.Name.Title === "canonical") {
                    tag.Link = { rel: 'canonical', href: (t.Content.indexOf("http://") !== -1 || t.Content.indexOf("https://") !== -1) ? t.Content:  process.env.SITE_URL + t.Content };
                } else
                    tag.MetaNameTags.push({ type: 'name', title: t.Name.Title, content: t.Content });
            }
        });


    if (data.CharSetTag && data.CharSetTag.CharSet)
        tag.MetaNameTags.push({ type: 'charset', content: data.CharSetTag.CharSet.Title });

    if (data.MetaPropertyTag)
        data.MetaPropertyTag.forEach((t:any) => {
            if (t.Content && t.Property)
                tag.MetaPropertyTags.push({ type: 'property', title: t.Property.Title, content: t.Content });
        });

    if (data.MetaNameImageTag)
        data.MetaNameImageTag.forEach((t:any) => {
            if (t.Content && t.Name)
                tag.MetaNameTags.push({ type: 'name', title: t.Name.Title, content: getStrapiMedia(t.Content) });
        });

    if (data.MetaPropertyImageTag)
        data.MetaPropertyImageTag.forEach((t:any) => {
            if (t.Content && t.Property)
                tag.MetaNameTags.push({ type: 'property', title: t.Property.Title, content: getStrapiMedia(t.Content) });
        });
}
function siteMapGenerator(pageObject:any, url:any, tag:any) {
    var linkHref = tag.Link.href;
if(linkHref.indexOf(process.env.SITE_URL) !== -1){
    var jObject:any = {};
    
    if (pageObject.updated_at && pageObject.ChangeFrequency && pageObject.Priority) {
        var dt = new Date(pageObject.updated_at);
        var date = dt.getFullYear() + '-' + ('0' + (dt.getMonth() + 1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2);
        jObject['loc'] = linkHref;
        jObject['lastmod'] = date;
        jObject['changefreq'] = pageObject.ChangeFrequency;
        jObject['priority'] = pageObject.Priority == 1 ? '1.0' : pageObject.Priority;

    } else {
        jObject.loc = linkHref;
    }

    return jObject;
}
    return undefined
}
export default contentProvider;
//