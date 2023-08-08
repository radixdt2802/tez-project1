export function sitemap(jObject:any) {
    var xmlObject = {
        "_declaration": {
            "_attributes": {
                "version": "1.0",
                "encoding": "utf-8"
            }
        },
        "urlset": {
            "_attributes": {
                "xmlns": "http://www.sitemaps.org/schemas/sitemap/0.9"
            }
        }
    }
    var urlObject = {
        "loc": process.env.SITE_URL + jObject.URL,
        "lastmod": jObject.updated_at.getFullYear() + '-' + (jObject.updated_at.getMonth() + 1) + '-' + jObject.updated_at.getDate(),
        "changefreq": jObject.ChangeFrequency,
        "priority": jObject.Priority
    };

}
