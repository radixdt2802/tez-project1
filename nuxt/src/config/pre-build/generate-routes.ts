import  axios from "axios";
import urlReplacer from "../../utils/url-replacer";
import prePostLayout from "../../utils/pre-post-object";
import  SnakeCase from "../../utils/sanitizers/snake-case.sanitizer";
import fs from 'fs'
import path from 'path'
var DYNAMIC_PAGE_ROUTE_CONFIGURATION:any = {};
import contentProvider from "../../utils/content-provider";
var URI_BASED_HEADER_FOOTERS:any = {};
import {COMPONENT_DATA_PARSER} from '../../utils/component-data-parser'
function removeInvertedComma(value:string){
if(value && typeof value === "string")
  {
    return value.replace(/"/g,"'")
  }
  return value;
}
function parseTags(tags:any){
  let jObject:any= {metaTag:{name:{},property:{}}};
  jObject.title =removeInvertedComma( tags.title);
  if(tags.Link && tags.Link.href)
    jObject.canonical = tags.Link.href;
  if(tags.MetaPropertyTags)
  tags.MetaPropertyTags.forEach((t:any)=>{
    jObject.metaTag.property[t.title] = removeInvertedComma(t.content);
  })
  if(tags.MetaNameTags)
  tags.MetaNameTags.forEach((t:any)=>{
    jObject.metaTag.name[t.title || t.type] = removeInvertedComma(t.content);
  })
  jObject.linkingData=tags.PageSchema;
  return jObject;
}
export default  async function(config?:any) {
    // Added parameter after url to get newly added pages
    console.log("start")
    
    var result = await axios.get(process.env.API_URL + '/pages?_limit=10000');
    if (result && result.data) {
        var routes:any = [];
        for(var i=0;i<result.data.length;i++){
          var t = result.data[i];
          if (t.DynamicPage) {
            var dynamicResult = await axios.get(process.env.API_URL + '/' + SnakeCase(t.DynamicPage));
            dynamicResult.data.forEach((dynamicItem:any) => {
                if (dynamicItem.NavURL) {
                    // console.log("dynamic url - ",dynamicItem.NavURL)
                    var jObject = {
                      isAmpPage:dynamicItem.isAmpPage,
                        url: t.URL, data: { id: dynamicItem.id, title: dynamicItem.Title || dynamicItem.Name , content: dynamicItem.Content, metaTags: dynamicItem.MetaTags, seo: dynamicItem.SEO }
                    };
                    DYNAMIC_PAGE_ROUTE_CONFIGURATION[dynamicItem.NavURL] = jObject
                    var xpath = urlReplacer(dynamicItem.NavURL);
                    if (routes.filter((t:any) => t.path === xpath).length === 0) {
                      // if(xpath === "/webstories/best-devops-tools")
                      //     console.log(dynamicItem.data.NavURL)
                        routes.push({
                            isAmpPage:dynamicItem.isAmpPage,
                            name: jObject.data.title.replace(/[^A-Z0-9]/ig, "_"),
                            path: xpath,
                            fPath:xpath.split('/').join(path.sep)
                        })
                    }

                }
            });
        } else {
          if(urlReplacer(t.URL) === "/webstories/best-devops-tools")
                        console.log(t)
            routes.push({
                isAmpPage:t.isAmpPage,
                name: t.Title.replace(/[^A-Z0-9]/ig, "_"),
                path: urlReplacer(t.URL),
                fPath:t.URL.split('/').join(path.sep)
            })
        }
        }
       
        config.pageRoute.addRoutes(routes);
        config.pageRoute.save();
        var payloadPath = path.join(
            process.cwd(),
            'public', 'payload'
        );
        var masterLayoutJson = path.join(
            process.cwd(),
            'public', 'payload', 'master-layout.json'
        );
        if (process.env.IS_PRODUCTION === 'true' && fs.existsSync(payloadPath)) {
            console.log("payload directory removed")
            fs.rmdirSync(payloadPath, { recursive: true });
        }
        var siteMaps:any = {};
        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            
            var url = urlReplacer(route.path);
            var baseUrl = url;

            //if (url === "/category/photo-retouching") {
            var dynamicData = undefined;

            if (DYNAMIC_PAGE_ROUTE_CONFIGURATION[url]) {
                dynamicData = DYNAMIC_PAGE_ROUTE_CONFIGURATION[url].data;
                baseUrl = url;
                url = DYNAMIC_PAGE_ROUTE_CONFIGURATION[url].url;
            }
            var directoryPath = path.join(
                process.cwd(),
                'public', 'payload', baseUrl
            );
            var paths = directoryPath.split('\\');
            var payloadFilePath  = path.join(
              directoryPath,`${paths[paths.length - 1]}.json`
            );
            var isNotExits = createPath(directoryPath);
            if (isNotExits || (!isNotExits && !isFileExits(payloadFilePath))) {
              console.log(baseUrl)
              var apiResult = await axios.get(process.env.API_URL + '/pages?_limit=10000&URL=' + url);
                var page = await contentProvider(apiResult.data[0], baseUrl, undefined, dynamicData);
                if (page) {
                    URI_BASED_HEADER_FOOTERS[baseUrl] = {};
                    if(apiResult.data[0].HeaderSection)
                    URI_BASED_HEADER_FOOTERS[baseUrl].pre = prePostLayout(apiResult.data[0].HeaderSection);
                    if(apiResult.data[0].FooterSection)
                    URI_BASED_HEADER_FOOTERS[baseUrl].post = prePostLayout(apiResult.data[0].FooterSection);

                  var componentIds = [];
                  var componentsData:any = {};
                  var componentNames = [];
                    for (var j = 0; j < page.components.length; j++) {
                        var component = page.components[j];
                        component.id = `${j}-${component.name}`;
                        var componentPath = path.join(
                          process.cwd(),"src","components",
                          component.name + ".vue"
                      );
                      if(fs.existsSync(componentPath)){
                        config.globWriter.addComponent(component.name);
                        componentIds.push(component.id);
                        var filePath = path.join(
                            directoryPath,
                            component.id + ".json"
                        );
                      component.data.clientComponentName = component.name;
                      if(COMPONENT_DATA_PARSER && COMPONENT_DATA_PARSER[component.data.clientComponentName])
                      component.data =    COMPONENT_DATA_PARSER[component.data.clientComponentName](component.data)
                      componentsData[component.id] = component.data;

                      if(componentNames.indexOf(component.name) === -1)
                        componentNames.push(component.name)
                        await fs.writeFileSync(filePath, JSON.stringify(component.data));
                      }
                    }

                    filePath = path.join(
                        directoryPath,
                        "tags.json"
                    );

                    await fs.writeFileSync(filePath, JSON.stringify(parseTags(page.tags)));
                    var fileName = baseUrl.split('/');

                    filePath = path.join(
                        directoryPath,
                        fileName[fileName.length - 1] + ".json"
                    );
                  var componentItems:any = [];
                  var componentItemNames:any = [];
                  if (URI_BASED_HEADER_FOOTERS[baseUrl]) {

                    URI_BASED_HEADER_FOOTERS[baseUrl].pre.forEach((t:any) => {
                      componentItems.push(t.name);
                      componentItemNames.push(t.name);
                      componentsData[t.name] = t.data || {};
                      componentsData[t.name].clientComponentName = t.name;
                      config.globWriter.addComponent(t.name);
                      if(componentsData[t.name].mobileComponentName){
                        config.globWriter.addComponent(componentsData[t.name].mobileComponentName);
                      }
                        
                    });
                    componentIds.forEach((t) => componentItems.push(t));
                    componentNames.forEach((t) => componentItemNames.push(t));
                    URI_BASED_HEADER_FOOTERS[baseUrl].post.forEach((t:any) => {
                      componentItems.push(t.name);
                      componentItemNames.push(t.name)
                      componentsData[t.name] = t.data || {};
                      config.globWriter.addComponent(t.name);
                    });
                    componentIds = componentItems;
                  }
                  var preLoadPath = path.join(
                    directoryPath,
                    "pre-load.json"
                  );
                  await fs.writeFileSync(filePath, JSON.stringify({slots:{default:componentIds.map((t:any, i:any) => {
                    return i < 3 ? [componentsData[t],t] : [t]
                  })}}));
                  // if(page.siteMap)
                  //     config.sitemap.add({sitemap:{...page.siteMap,...{loc:`${page.siteMap.loc}`}}});
                    if (page.siteMap && Object.keys(page.siteMap).length > 0)
                        siteMaps[page.siteMap.loc] = page.siteMap;
                  await fs.writeFileSync(preLoadPath, JSON.stringify({names:componentItemNames,data:componentIds.splice(3)}));
                }
            }
        }
        config.globWriter.write()
        // console.log(URI_BASED_HEADER_FOOTERS)
        var isExits = fs.existsSync(masterLayoutJson)
        if(isExits){
          var prePostResult = JSON.parse(fs.readFileSync(masterLayoutJson,
          {encoding:'utf8', flag:'r'}));
        //   console.log(prePostResult)
          Object.keys(prePostResult).forEach(t=>{
            if(!URI_BASED_HEADER_FOOTERS[t])
            URI_BASED_HEADER_FOOTERS[t] = prePostResult[t];

          })
            fs.writeFileSync(masterLayoutJson, JSON.stringify(URI_BASED_HEADER_FOOTERS));
        }else {
            fs.writeFileSync(masterLayoutJson, JSON.stringify(URI_BASED_HEADER_FOOTERS));
        }

    }
    if (process.env.IS_PRODUCTION === "true") {
        console.log("Generating SiteMap");
        var siteMapUris = '<?xml version="1.0" encoding="UTF-8"?>\n\n';
      siteMapUris += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
      var notMapped:any = [];
      Object.keys(siteMaps).forEach(urlNode => {
        if (siteMaps[urlNode].priority)
          siteMapUris += getSitemapUrlNode(siteMaps[urlNode]);
        else
          notMapped.push(urlNode);
      })
      if (process.env.PRODUCTION_URL) {
        var productionSiteMapUris = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        Object.keys(siteMaps).forEach(urlNode => {
          if (siteMaps[urlNode].priority) {
            var siteMap = siteMaps[urlNode];
            siteMap.loc = siteMap.loc.replace(process.env.SITE_URL, process.env.PRODUCTION_URL);
            productionSiteMapUris += getSitemapUrlNode(siteMap);
          }
        }); productionSiteMapUris += '</urlset>';
     
        await fs.writeFileSync(path.join(
          process.cwd(),
          'public', 'sitemap.production.xml'
        ), productionSiteMapUris);
        console.log("production sitemap generated")
      }
              siteMapUris += '</urlset>';
        var siteMapPath = path.join(
            process.cwd(),
            'public', 'sitemap.xml'
      );
      var notsiteMapPath = path.join(
        process.cwd(),
        'public', 'not-mapped.json'
      );
      //config.sitemap.save()
       await fs.writeFileSync(siteMapPath, siteMapUris);
       await fs.writeFileSync(notsiteMapPath, JSON.stringify(notMapped));
        console.log("SiteMap Generated");
    }
    // depsContainer.setRoutes(routes)
    // routes.forEach((route:any)=>{
    //   var jsCodeGen = new JsCodeGen(route);
    //   jsCodeGen.gen();
    // })
    console.log("print finish");
}
function createPath(pathToCreate:any) {
    var isNotExits = false
    pathToCreate
        .split(path.sep)
        .reduce((prevPath:any, folder:any) => {
            const currentPath = path.join(prevPath, folder, path.sep);
            
            isNotExits = !fs.existsSync(currentPath);
            if (isNotExits) {
                fs.mkdirSync(currentPath);
            }
            return currentPath;
        }, '');
    return isNotExits;
}

function isFileExits(filePath:any){
try{return fs.existsSync(filePath)}catch(ex){return false}
}

function getSitemapUrlNode(mapObject:any) {
    return '<url>\n' +
        '<loc>' + mapObject.loc + '</loc>\n' +
        '<lastmod>' + mapObject.lastmod + '</lastmod>\n' +
        '<changefreq>' + mapObject.changefreq + '</changefreq>\n' +
        '<priority>' + mapObject.priority + '</priority>\n' +
        '</url>\n';
}
