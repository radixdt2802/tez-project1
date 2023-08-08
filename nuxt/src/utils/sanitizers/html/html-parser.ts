import assignId from "./assign-id";
import blockquote from "./blockquote";

export default function(htmlStrings:string[]){
    var elementStrings = [];
    let idRegex = new RegExp("{#.*?}");
    for(var i=0;i<htmlStrings.length;i++){
        let htmlString = htmlStrings[i];
        if(htmlString.indexOf("<blockquote") !== -1){
           i= blockquote(htmlStrings,i,elementStrings)
        }
        else if(idRegex.test(htmlString)){
            assignId(htmlString,elementStrings);
            
        }
        else  {
            elementStrings.push(htmlString);
        }
    }
    return elementStrings;
}