export default function(queryObject:any, entity:any) {
    var query:any = {};
    if (queryObject && queryObject.query) {
        Object.keys(queryObject.query).forEach(key => {
            var keyValue = queryObject.query[key];
            if (keyValue.startsWith("#")) {
                var splitText = keyValue.split(".");
                var text:any = undefined;
                splitText.forEach((t:any) => {
                    if (!text)
                        text = entity[t.replace("#", "")];
                    else
                        text = text[t];
                })
                keyValue = text;
            }
            query[key] = keyValue;
        });
    }
    return query;
}
