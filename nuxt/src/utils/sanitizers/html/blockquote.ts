export default function(elements:string[],startIndex:number,elementStrings:string[]){
    var lastIndexCount = startIndex;
    for(var i=startIndex;i<elements.length;i++){
        let elementString = elements[i];
        var regex = new RegExp("<a.*?</a>");
        if(elementString.indexOf("<h4") !== -1 && elementString.indexOf("<a") !== -1){
            let matchResult = regex.exec(elementString);
            if(matchResult && matchResult.length > 0){
                elementString = elementString.replace(matchResult[0],"");
                elementStrings.push(elementString);
                elementStrings.push(matchResult[0]);
            }
        }else
            elementStrings.push(elementString)
        if(elementString.indexOf("</blockquote") !== -1)
        {
            lastIndexCount = i;
            break;
        }
    }
    return lastIndexCount;
}