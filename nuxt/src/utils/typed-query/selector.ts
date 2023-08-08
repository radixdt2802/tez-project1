export default function(data:any, fields:any) {
    var jObject:any = [];
    if(data && Array.isArray(data)){
        data.forEach((item:any) => {
            var itemObject:any = {};
            fields.forEach((t:any) => {
                if (Array.isArray(t)) {
                    itemObject[t[0]] = t[1](item[t[0]])+'...';
                } else
                    itemObject[t] = item[t];
            })
            jObject.push(itemObject);
        });
        return jObject;
    }
    return data;
}
