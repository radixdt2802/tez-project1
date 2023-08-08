import fs from 'fs';
var minify = require('html-minifier').minify;

import { filePath } from './html-page-util/file-path.function';
import { getFiles } from './service-worker-util/get-files-checksum';

export function generateServiceWorker() {
    return {
      name: 'generate-service-worker',
  
      closeBundle() {
        return new Promise<void>(async (resolve,reject)=>{
            console.log(process.env.IS_PRODUCTION)
          if(fs.existsSync('./dist') && (process.env.GEN_SERVICEWORKER === 'true')){
              var files = filePath('./dist','');
              var jObject = await getFiles(files)
              var code = `const assets = {
                scripts:${JSON.stringify(jObject.scripts)},
                styles:${JSON.stringify(jObject.styles)},
                html:${JSON.stringify(jObject.html)},
                json:${JSON.stringify(jObject.json).replace(/\\/g, "/").replace(new RegExp("//","g"), "/")}
                };`
                var swScript = fs.readFileSync(`${process.cwd()}\\src\\modules\\service-worker-util\\sw.js`,"utf-8");
                var registerSW = fs.readFileSync(`${process.cwd()}\\src\\modules\\service-worker-util\\registerSW.js`,"utf-8");
                fs.writeFileSync('./dist/registerSW.js',minify(`${registerSW}`,{minifyJS:true,collapseWhitespace: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true}));

                fs.writeFileSync('./dist/sw.js',minify(`${code}${swScript}`,{minifyJS:true,collapseWhitespace: true,
                                                removeComments: true,
                                                removeEmptyAttributes: true,
                                                removeRedundantAttributes: true,
                                                removeScriptTypeAttributes: true,
                                                removeStyleLinkTypeAttributes: true}));
               // fs.writeFileSync('./dist/payload-data.json',JSON.stringify(jObject.json).replace(/\\/g, "/").replace(new RegExp("//","g"), "/"))
          }
            resolve();

        }) 
        
      }
    }
  }