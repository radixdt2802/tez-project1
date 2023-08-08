export default function(queryObject:any) {
    var queryString = '';
    Object.keys(queryObject).forEach((t, i) => {
        if (i > 0)
            queryString += "&";
        queryString += t + '=' + queryObject[t];
    })
    return queryString;
}
