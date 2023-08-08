import { getImages } from "./extract-images";

export function blogDetailImagePreload(payloadItem:any){
    let preloads = new Array<{path:string,type?:string}>();
    if(payloadItem.Image)
        preloads.push({path:payloadItem.Image.url,type:'image'});
    if(payloadItem.BlogAuthor && payloadItem.BlogAuthor.Image)
        preloads.push({path:payloadItem.BlogAuthor.Image.url,type:'image'});
    if(payloadItem.LongText && Array.isArray(payloadItem.LongText)){
        const htmlString = payloadItem.LongText.join(" ");
        const images = getImages(htmlString);
        if(images.length >0)
            preloads.push({path:images[0],type:'image'});
    }
    preloads.push({path:"https://d2ms8rpfqc4h24.cloudfront.net/eye_30x30_teal_01_cad88441cc.svg",type:"image"})
    preloads.push({path:"https://d2ms8rpfqc4h24.cloudfront.net/Social_Share_e47e21d3dd.svg",type:"image"})
    return preloads;
}