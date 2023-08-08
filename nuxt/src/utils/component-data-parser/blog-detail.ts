export function blogDetailParser(data:any){
delete data.MetaTags;
delete data.SEO;
delete data["blog-featured"];
if(data["Category"] && data["Category"][0])
delete data["Category"][0].Content;
if(data["Category"] && data["Category"][0])
delete data["Category"][0].Content;
if(data["blog-categories"])
{
    data["blog-categories"] = data['blog-categories'].data.dynamicResult.slice(0, 13);
}
if(data["BlogAuthor"]){
    delete data["BlogAuthor"].Designation;
    delete data["BlogAuthor"].Country;
}
delete data.CreatedDate;
delete data.Classification;
delete data.RelatedFeaturedBlogs;
if (data["blog-list"] && data["blog-list"].data && data["blog-list"].data.dynamicResult) {
    if(Array.isArray(data["blog-list"].data.dynamicResult)){
        var items :any = [];
        var sortedBlogList = data["blog-list"].data.dynamicResult
          .sort((a:any, b:any) => {
            let left:any = new Date(b.PublishedDate);
            let right:any = new Date(a.PublishedDate);
            return left - right;
          })
          .slice(0, 10);
        if (sortedBlogList.length > 2) {
          var max = sortedBlogList.length;
          var blogIndexes:any = [];
          for (var i = 0; blogIndexes.length < 3; i++) {
            var blog = Math.floor(Math.random() * max);
            if (!blogIndexes.includes(blog)) {
              blogIndexes.push(blog);
              items.push(sortedBlogList[blog])
            }
          }
          data["blog-list"].data.dynamicResult = cleanObject(items);
        }
      }
      return data;
    }
    return data;
}
function cleanObject(data:any){
    data.forEach((t:any)=>{
        delete t.Category;
        delete t.Image;
        delete t.BlogAuthor;
        delete t.Classification;
        delete t.LongText;
        delete t.ReadingTime;
        delete t.PublishedDate;
        delete t.hide;
        t.NavURL = (t.NavURL === null) ? '#': t.NavURL
    })
    return data;
}