export function relatedArticlesParser(data:any){
if(data.dynamicResult && Array.isArray(data.dynamicResult)){
    data.dynamicResult.forEach((item:any)=>{

        if(item["Classification"]){
            if(item["Category"] && item["Category"][0]){
                delete item["Category"][0].Content;
                item["Category"] = [item["Category"][0]]
            }
        }else
            delete item["Category"];
        delete item.BlogAuthor.ShortText;
        delete item.BlogAuthor.Designation;
        delete item.BlogAuthor.Country;
        delete item.LongText;
    })
    data.dynamicResult = data.dynamicResult.slice(1,4);
 
}
return data;
}