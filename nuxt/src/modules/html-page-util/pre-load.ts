import getLinkTag from "./get-link-tag";

export default function(preLoadComponents:any[],scriptPaths:string[],stylePaths:string[],startIndex:number,endIndex:number,isPrefetch?:boolean){
    endIndex = endIndex > preLoadComponents.length ?  preLoadComponents.length : endIndex;
    let stringElement  = '';
    for(var i=startIndex;i<endIndex;i++) {
        var name = preLoadComponents[i].toLowerCase();
        var jsFiles = scriptPaths.filter(t=> t.indexOf(".js") !== -1 && t.split(".")[0].toLowerCase() === `dist\\assets\\${name}`.toLowerCase());
        var cssFiles = stylePaths.filter(t=> t.indexOf(".css") !== -1 && t.split(".")[0].toLowerCase() === `dist\\assets\\${name}`.toLowerCase());
        
        jsFiles.forEach(t=>{
            var scriptElement = t.replace('dist','').replace(/\\/g, '/');
            if(isPrefetch)
                stringElement += `${scriptElement},`
            else
                stringElement+=getLinkTag(scriptElement,'script')
        });
        cssFiles.forEach(t=>
            {
                var styleElement = t.replace('dist','').replace(/\\/g, '/');
            if(isPrefetch)
                stringElement += `${styleElement},`
            else
                stringElement+=getLinkTag(t.replace('dist','').replace(/\\/g, '/'),'style')
            });
    }
    return stringElement;
}