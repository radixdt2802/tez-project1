export default function(hrefPath:string,as:string){
    return `<link data-head="tezjs" rel="${as === "script" ? "modulepreload":'stylesheet'}" as="${as}" ${as === "script" ? "crossorigin":''} href="${hrefPath}">\n`
}