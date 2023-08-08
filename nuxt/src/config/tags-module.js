import { getMetaTags } from '../utils/meta-tag-builder';
import { getStrapiMedia } from '../utils/strapi-media';
import fs from 'fs';
export default function TagsModule() {
    //console.log(this.path)
    //if (typeof window === "undefined") {
        //var path = require('path');
        //var tagFilePath = process.cwd() + this.path;
        //const data = fs.readFileSync(tagFilePath,
        //    { encoding: 'utf8', flag: 'r' });
        const { title, MetaNameTags, MetaPropertyTags, Link, PageSchema } = this.tags;
        var jObject = {
            title: title,
            meta: [].concat(...getMetaTags(MetaNameTags), ...getMetaTags(MetaPropertyTags)),
            link: [Link]
        };
        if (PageSchema) {
            jObject['__dangerouslyDisableSanitizers'] = ['script'];
            jObject['script'] = [{ innerHTML: PageSchema, type: 'application/ld+json' }];
        }
        return jObject;
    }
    

