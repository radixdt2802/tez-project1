export function getMetaElementsString(tags:any){
    var elementString = '';
    if(tags.link)
        elementString+= `<link data-head="tezjs" rel="canonical" href="${tags.link.href}">\n`;
        tags.metas.forEach((meta:any)=>{
              if(meta.type === "charset")
                elementString += `<meta data-head="tezjs" content="${meta.content.replace(/"/g,"'")}">\n`
              else if(meta.type === "property")
                    elementString += `<meta data-head="tezjs" property="${meta.title}" content="${meta.content.replace(/"/g,"'")}">\n`
              else if(meta.type === "name")
                    elementString += `<meta data-head="tezjs" name="${meta.title}" content="${meta.content.replace(/"/g,"'")}">\n`
            })
            if(tags.pageSchema)
                elementString += `<script type="application/ld+json">${tags.pageSchema.replace(/(\n)/g,"")}</script>`
            return elementString;
}