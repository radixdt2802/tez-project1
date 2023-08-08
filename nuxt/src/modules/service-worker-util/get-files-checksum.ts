import { getChecksum } from "./get-checksum";

export async function getFiles(files:Array<string>){
    const jObject:any={scripts:{},styles:{},json:{},html:{}};
      
      
    for(const filePath of files){
      var file:any = filePath;
      file = file.split("dist\\").pop().replace('\\','/')
      var extension = file.split('.').pop();
      switch(extension){
        case 'js':
          if(file !== "sw.js")
          jObject.scripts[`/${file}`] = await getChecksum(filePath)
          break;
        case 'css':
          jObject.styles[`/${file}`] = await getChecksum(filePath)
          break;
          case 'html':
          file = file.replace("\\index.html","").replace("/index.html","").replace("index.html","").replace("index","")
          jObject.html[`/${file}`] = await getChecksum(filePath)
          break;
        case 'json':
          jObject.json[`/${file}`] = await getChecksum(filePath)
          break;
      }
    }
    return jObject;
  }