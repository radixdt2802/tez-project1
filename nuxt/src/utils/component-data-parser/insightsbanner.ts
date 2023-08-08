export function insightsBannerParser(data:any){
    if(data.dynamic){
        delete data.dynamic.metaTags;
        delete data.dynamic.seo;
    }
    delete data.Field;
    delete data.Value;
    delete data.Limit;
    return data;
    }