import fs from 'fs';
var minify = require('html-minifier').minify;
import robots from '../config/pre-build/robots'
import redirectRoutes from '../config/pre-build/redirect-routes'
import generateHtmlPages from './generate-html-pages';

export function myPlugin() {
    return {
      name: 'transform-file',
  
      closeBundle() {
        return new Promise<void>(async (resolve,reject)=>{
          if(fs.existsSync('./dist')){
             await redirectRoutes();
             await robots()
          }
            resolve();

        }) 
        
      }
    }
  }