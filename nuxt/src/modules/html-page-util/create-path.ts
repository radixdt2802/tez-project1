import path from 'path';
import fs from 'fs';
export default function(pathToCreate:string) {
    var isNotExits = false
    pathToCreate
        .split(path.sep)
        .reduce((prevPath, folder) => {
            const currentPath = path.join(prevPath, folder, path.sep);
            
            isNotExits = !fs.existsSync(currentPath);
            if (isNotExits) {
                fs.mkdirSync(currentPath);
            }
            return currentPath;
        }, '');
    return isNotExits;
}