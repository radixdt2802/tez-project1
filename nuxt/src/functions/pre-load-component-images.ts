import { blogDetailImagePreload } from "./blog-detail-image-preload";

export function preLoadComponentImages(componentName:string,payloadItem:any){
    let preloads = new Array<{path:string,type?:string}>();
    if(payloadItem)
    switch(payloadItem.clientComponentName){
        case "blog-detail":
            console.log("in")
            preloads = blogDetailImagePreload(payloadItem)
            break;
    }
    return preloads;
}