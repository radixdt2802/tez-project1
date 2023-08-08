import QueryStringResolver from "../query-string.resolver";
import SnakeCase from "../sanitizers/snake-case.sanitizer"
import axios from "axios";
import jsonToString from "../json-to-string"
export default async function(queryObject:any, entity:any, $strapi:any) {
    var strapiEntity = SnakeCase(queryObject.entity);
    if (queryObject && !queryObject.query)
            queryObject.query = {};
    
    if(queryObject && queryObject.query)
      queryObject.query["_limit"] = "10000";

    if (strapiEntity.trim() === "blogs") {
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if (strapiEntity.trim() === "news-items") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if (strapiEntity.trim() === "guides") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if (strapiEntity.trim() === "videos") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if (strapiEntity.trim() === "podcasts") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if (strapiEntity.trim() === "website-stories") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
      queryObject.query["_sort"] = "CreatedDate:DESC";
    }
    if ($strapi) {
        return await $strapi.find(strapiEntity, QueryStringResolver(queryObject, entity));
    }
    else {
      var requestresult = await axios.get(process.env.API_URL + '/' + strapiEntity + "/?" + jsonToString(QueryStringResolver(queryObject, entity)));
      return requestresult.data ? requestresult.data : [];
      
    }
}


