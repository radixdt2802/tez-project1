
export function blogListParser(data:any){
    delete data.dynamic;
    removePropsBlogFilter(data);
    if(data.dynamicResult && Array.isArray(data.dynamicResult)){
        data.dynamicResult.forEach((item:any)=>{
            if(item["Classification"]){
                if(item["Category"] && item["Category"][0]){
                    delete item["Category"][0].Content;
                    item["Category"] = [item["Category"][0]]
                }
            }else
                delete item["Category"];
        if(item.BlogAuthor){
            delete item.BlogAuthor.ShortText;
            delete item.BlogAuthor.Country;
            delete item.BlogAuthor.Designation;
        }
        delete item.LongText;
        })
        
    }
    return data;
    }
function removePropsBlogFilter(data:any){
if(data["blog-categories"]){
    var blogCategories = data["blog-categories"];
    delete blogCategories.data.CollectionType;
    delete blogCategories.data.VueReferenceCode;
    delete blogCategories.data.Limit;
    delete blogCategories.data.ComponentReferencePath;
    delete blogCategories.data.TitleReferenceCode;
    delete blogCategories.data.dynamic;
    delete blogCategories.data.CollectionType;
    delete blogCategories.data.CollectionType;

}
}