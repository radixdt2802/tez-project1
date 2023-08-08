export default function(path:string){
    let splitUrl = path.replace(/\\/g,"/").replace("dist","").split("/");
    let lastUrlNode = splitUrl[splitUrl.length - 2];
    let payloadUrl = path.replace(/\\/g,"/").replace("dist","").replace("pre-load.json",`${lastUrlNode}.json`);
    let tagsUrl = path.replace(/\\/g,"/").replace("dist","").replace("pre-load.json",`tags.json`);
    return `<link data-head="tezjs-preload" rel="preload" as="fetch" crossorigin href="${payloadUrl}"/><link data-head="tezjs-preload" rel="preload" as="fetch" crossorigin href="${tagsUrl}"/>`
}