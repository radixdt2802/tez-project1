import {defineTezConfig } from "@tezjs/vite"
import vue from '@vitejs/plugin-vue'
import generator from './src/config/pre-build/generate-routes';
import { preLoadComponentImages } from './src/functions/pre-load-component-images'
const customBoilerPlate=`
body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}
`
export default defineTezConfig({
    sourceCodePath:'src',
    htmlMeta:{
        head:{
            preConnect:["https://d2ms8rpfqc4h24.cloudfront.net"],
            preFetchDns:["https://d2ms8rpfqc4h24.cloudfront.net"],
            preFetch:[],
            favicon:'/favicon.ico',
            
        }
    },
    generate:{
        sitemap:false,
        robots:false
    },
    build:{
        inLineJs:false,
        inLineCss:false,
        bundleCss:true,
        minifyHtml:false
    },
    client:{
        imports:['/@/assets/scss/tailwind.scss'],
        loaderImage:'/images/loader.gif',
        // preCache:{
        //     route:true
        // }
    },
    strapi: {
        customPayloadGenerator:generator
    },
    pwaConfigPath:'/service-worker-config.ts',
    pwa:{
        config:{
            "short_name": "radixweb",
            "name": "radixweb",
            "icons": [
                {
                    "src": "/images/icons/192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/images/icons/512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ],
            "start_url": "/",
            "display": "standalone",
            "orientation": "portrait",
            "theme_color": "#025fa2",
            "background_color": "#FFFFFF",
            "related_applications": []
        },

        htmlElementConfig:{
            appleTouchIcon:{
                href:"/images/icons/144x144.png",
                sizes:"144x144"
            },
            themeColor:"#025fa2"
        }
    },
    amp:{
        page:{
            head:{
                handler:{
                  code:(route:any)=>{
                    if(route.isAmpPage)
                      return `<meta charset="utf-8">\n <style amp-boilerplate>${customBoilerPlate}</style></noscript>`;
                    return '';
                }
                },
                scripts:[{
                  src:"https://cdn.ampproject.org/v0/amp-story-1.0.js",
                  attributes:{
                    "custom-element":"amp-story"
                  },

                },{
                  src:"https://cdn.ampproject.org/v0.js",
                }],
                inlineStyle:[{name:'custom',attributes:{
                  "amp-custom":""
                }}]
            },
            template:(url:any,item:any)=>{
                return ampTemplate(ampData)
            }
        }
    },
})