import { filePath } from "./html-page-util/file-path.function";
import fs from 'fs';
import getPagePayloadLink from "./html-page-util/get-page-payload-link";
import { getMetaInfo } from "./html-page-util/get-meta-info";
import preLoad from "./html-page-util/pre-load";
import createPath from "./html-page-util/create-path";
import { getMetaElementsString } from "./html-page-util/get-meta-elements-string";
import { minify } from 'html-minifier';
export  default function(){
            let globFiles = {scripts:filePath('./dist','js'),styles:filePath('./dist','css'),preLoad:filePath('./dist','pre-load.json')};
            var path = './dist/index.html'
            if(fs.existsSync('./dist')){
                let indexHtml =   fs.readFileSync(path,{encoding:'utf8', flag:'r'});
                globFiles.preLoad.forEach(path=>{
                    var tags = getMetaInfo(path);
                    var preLoadData =  JSON.parse(fs.readFileSync(path,{encoding:'utf8', flag:'r'}));
                        var preLoadPath= path;
                        
                        var preLoads = '<head>';
                        preLoads+= `<title>${tags.title}</title>`;
                        var vendorPath = globFiles.scripts.filter(t=> t.split(".")[0].toLowerCase() === `dist\\assets\\vendor`.toLowerCase())[0].replace("dist","");
                        vendorPath = `<link rel="modulepreload" href="${vendorPath}">`.replace(/\\/g,"/");
                        preLoads+=vendorPath;
                        preLoads += getPagePayloadLink(path);
                        preLoads+= preLoad(preLoadData.names,globFiles.scripts,globFiles.styles, 0,preLoadData.names.length);
                        path = path.replace("payload\\","").replace("\\pre-load.json","");
                        var page = indexHtml.replace(vendorPath,'').replace("<head>",preLoads);
                        console.log(`${path}`)
                        createPath(path)
                            preLoads= getMetaElementsString(tags);
                                preLoads += `<script>
                                if ('serviceWorker' in navigator) {

                                    navigator.serviceWorker.getRegistrations().then(function(registrations) {
                                
                                    for(let registration of registrations) {
                                
                                            registration.unregister()
                                
                                    }}).catch(function(err) {
                                
                                        console.log('Service Worker registration failed: ', err);
                                
                                    });
                                }
                                </script>`
                            preLoads+= '</head>';
                            page = page.replace("</head>",preLoads);
                        page = minify(page,{minifyJS:true,collapseWhitespace: true,
                            removeComments: true,
                            removeEmptyAttributes: true,
                            removeRedundantAttributes: true,
                            removeScriptTypeAttributes: true,
                            removeStyleLinkTypeAttributes: true});
                            preLoadData.names = preLoad(preLoadData.names,globFiles.scripts,globFiles.styles, 3,preLoadData.names.length,true).split(",");
                            fs.writeFileSync(preLoadPath, JSON.stringify(preLoadData));    
                        var splitPaths = path.split("\\");
                        var indexFile = splitPaths[splitPaths.length - 1];
                        if(indexFile === "index"){
                            console.log(indexFile)
                            fs.writeFileSync(`${process.cwd()}\\dist\\index.html`, page);
                        }
                            
                        fs.writeFileSync(`${path}\\index.html`, page);
                })
            }
}