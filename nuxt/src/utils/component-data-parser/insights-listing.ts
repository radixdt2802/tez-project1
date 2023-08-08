
export function insightsListingParser(data:any){
    delete data.dynamic;
    if(data.dynamicResult && Array.isArray(data.dynamicResult)){
        data.dynamicResult.forEach((item:any)=>{
        if(item.Category && item.Category.length >0 )
        {
            delete item.Category[0].Content
            item.Category = [item.Category[0]]
        }
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