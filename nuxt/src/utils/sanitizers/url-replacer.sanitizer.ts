export default function (url:string) {
  if (typeof url === "string" && url.indexOf("https://") !== -1) {
    var env:any = process.env;
    var imageUrls = Array.isArray(env["STRAPI_IMAGE_URIS"])? env["STRAPI_IMAGE_URIS"]: JSON.parse(env["STRAPI_IMAGE_URIS"]);
    var imageCdn = env.IMAGE_CDN_URL;
    imageUrls.forEach((uriDomain:string) => {
      url = url.replace(uriDomain, imageCdn);
    })
  }
  return url;
}
