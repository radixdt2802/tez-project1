import {QUERY_BUILDER} from "../../query-builder/index";
import Query from './query';
import readingTime from '../sanitizers/reading-time';
export default async function(pageContent:any, url:any, $strapi:any) {
    if (QUERY_BUILDER[pageContent.Type]) {
        var result = await Query(QUERY_BUILDER[pageContent.Type], pageContent, $strapi);
        var wordsPerMinute = 200;
        var regex = /<(.|\n)[^>]*?>/g;

        if (!pageContent.GenericSection)
            pageContent.GenericSection = [];
        result.forEach((t:any) => {
            if (t.MetaTags)
                pageContent.GenericSection.push({ '__component': "tags.meta-tags", ...t.MetaTags });
            if (t.SEO)
                pageContent.GenericSection.push({ '__component': "tags.seo", ...t.SEO });
            if (t.VueReferenceCode == "Blog_details") {
              t["ReadingTime"] = readingTime(t.LongText, wordsPerMinute, regex);
            }
            pageContent.GenericSection.push(t);
        });
    }
    return pageContent;
}
