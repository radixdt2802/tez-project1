import {PwaConfig} from '@tezjs/types'
export default function():PwaConfig{
    return {
        cache:{
            immutable:{
                images:true
            },
            originCacheRules:[new RegExp(/\bfonts.googleapis.com\b/g),new RegExp(/\bfonts.gstatic.com\b/g),new RegExp(/\bd2ms8rpfqc4h24.cloudfront.net\b/g)]
        },
    }
}