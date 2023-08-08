import fs from 'fs';
export function getMetaInfo(path:string){
    var metaTagsInfo = JSON.parse(fs.readFileSync(path.replace("pre-load.json","tags.json"),{encoding:'utf8', flag:'r'}));
    var tags:any = {};
    tags.title = metaTagsInfo.title;
    tags.link = metaTagsInfo.Link;
    tags.metas = [];
    metaTagsInfo.MetaPropertyTags.forEach((meta:any)=>tags.metas.push(meta));
    metaTagsInfo.MetaNameTags.forEach((meta:any)=>tags.metas.push(meta));
    tags.pageSchema = metaTagsInfo.PageSchema;
    
    return tags
}