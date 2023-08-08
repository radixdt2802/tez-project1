import path from 'path';
import fs from 'fs';

export  function filePath(directoryPath:any,filterExtension:string){
    var regex = new RegExp(`.*[.](${filterExtension})$`)
    if(filterExtension === "pre-load.json")
    regex = new RegExp(`.*(${filterExtension})$`)
    var filePaths = []
        if (!fs.existsSync(directoryPath)){
            console.log("no dir ",directoryPath);
            return [];
        }
    
        var files=fs.readdirSync(directoryPath);
        for(var i=0;i<files.length;i++){
            var filename=path.join(directoryPath,files[i]);
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()){
                filePath(filename,filterExtension).forEach(t=>filePaths.push(t)); //recurse
            }
            else if (regex.test(filename) || filterExtension === "") {
                filePaths.push(filename)
            }
        };
        return filePaths.sort();
    };