import {blogDetailParser} from './blog-detail'
import { insightsBannerParser } from './insightsbanner';
import {relatedArticlesParser} from './relatedarticles';
import {blogListParser} from './blog-list';
import {insightsListingParser} from './insights-listing';
export const COMPONENT_DATA_PARSER:any = {
    "blog-detail": blogDetailParser,
    "relatedarticles":relatedArticlesParser,
    "insightsbanner":insightsBannerParser,
    "blog-list":blogListParser,
    "insights-listing":insightsListingParser
};