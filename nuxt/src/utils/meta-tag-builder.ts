export default function(metas:any) {
    const tags:any = [];

    metas.forEach((tag:any) => {
        var jObject = {};
        if (tag && tag.type === "charset") {
            jObject = { [tag.type]: tag.content };
        } else
            jObject = {
                [tag.type === "property" ? 'property' : 'name']: tag.title,
                content: tag.content
            };
        tags.push(jObject);
    });
    return tags;
}
