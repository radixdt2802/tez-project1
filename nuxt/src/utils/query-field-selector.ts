import shortText from './sanitizers/short-text.sanitizer'
export const QUERY_FIELD_SELECTOR:any = {
    "blog-list": ["Title", "Category", "PublishedDate", "LastModifiedDate", "Image", "NavURL", "BlogAuthor", "Classification", "LongText", "ReadingTime","ViewCount"],
    "insights-listing": ["Title", "Category", "PublishedDate", "Image", "NavURL", "BlogAuthor", "Classification", "LongText", "ReadingTime"],
    "insight-banner-slider": ["Title", "Category", "PublishedDate", "Image", "NavURL", "BlogAuthor", "Classification", "LongText", "ReadingTime","IsAvailableOnInsights"],
    "blog-detail": ["Title", "LongText", "BlogAuthor", "Category", "PublishedDate", "Image", "BannerImage", "NavURL", "RelatedBlogs","ViewCount","FAQs","LastModifiedDate"],
    "blog-categories": ["Title", "NavURL"],
    "blog-featured": ["Featured", "Title", "Category", "PublishedDate", "Image", "NavURL", "BlogTags", ["LongText", shortText]],
    "project-success": ["Title", "Image", "NavURL", "LongText", "Category"],
    "case-studies-list": ["id", "Title", "Image", "NavURL", "Category"],
    "case-studies-categories": ["id", "Title"],
    "case-studies-detail": ["Title", "LongText", "Category", "Image", "NavURL"],
    "video-list": ["id", "Title", "Image", "NavURL", "VideoURL", "ShortText", "Category", "Classification","IsAvailableOnInsights","CreatedDate"],
    "video-categories": ["id", "Title"],
    "classifications": ["id", "Title"],
    "whitepaper-list": ["id", "Title", "Image", "Source", "NavURL", "Category", "Classification", "Attachment"],
    "guide-list": ["id", "Title", "Image", "Source", "NavURL", "Category", "Classification"],
    "author-banner": ["Name", "Designation", "ShortText", "Image"],
    "joblisting": ["JobTitle", "NavURL"],
    "current-opening-sidebar": ["JobTitle", "NavURL"],
    "opening-page": ["JobTitle", "JobType", "Experience", "JobCode", "NavURL", "Opening", "Qualification", "Experience", "ShortText", "LongText", "Image"],
    "career-details": ["JobTitle", "JobType", "Experience", "JobCode", "NavURL", "Opening", "Qualification", "Experience", "ShortText", "LongText", "Image"],
    "career-details-walkin": ["JobTitle", "JobType", "Experience", "JobCode", "NavURL", "Opening", "Qualification", "Experience", "ShortText", "LongText", "Image"],
    "career-fresher": ["JobTitle", "JobType", "Experience", "JobCode", "NavURL", "Opening", "Qualification", "Experience", "ShortText", "LongText", "Image"],
    "common-careerform": ["JobTitle", "JobType", "Experience", "JobCode", "NavURL", "Opening", "Qualification", "Experience", "ShortText", "LongText", "Image"],
    "news-list": ["Title", "PublishedDate", "Image", "NavURL"],
    "news_description": ["Title", "PublishedDate", "Image", "NavURL"],
    "relatedarticles":["Title", "Category", "PublishedDate", "Image", "NavURL", "BlogAuthor", "Classification", "LongText", "ReadingTime",],
    "podcast-detail":["Title", "Category", "PublishedDate", "ShortText", "Image", "NavURL", "PodcastAuthor", "LongText", "IsHighlighted","Attachment"],
    "podcast-list": ["Title", "Image", "NavURL", "Category", "ShortText", "LongText","PublishedDate","IsHighlighted"],
    "podcastData": ["Title", "Image", "NavURL", "Category", "ShortText", "LongText","PublishedDate","IsHighlighted","Attachment"],
    "webstories-list": ["Title", "LongText","DisplayOrder", "CTA", "Image", "Icon", "BGImage", "NavURL","ShortText", "StoriesList","VueReferenceCode"],
    "webstory_templateone": ["Title", "LongText","DisplayOrder", "CTA", "Image", "Icon", "BGImage", "NavURL","ShortText", "StoriesList", "isAmpPage"],
    "checkData": ["Title", "LongText","DisplayOrder", "CTA", "Image", "Icon", "BGImage", "NavURL","ShortText", "StoriesList","isAmpPage"],
};