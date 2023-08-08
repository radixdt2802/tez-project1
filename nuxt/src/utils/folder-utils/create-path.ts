import path from 'path';
import fs from 'fs';
export function createPath(pathToCreate:string) {
    var isNotExits = false
    pathToCreate
        .split(path.sep)
        .reduce((prevPath:any, folder:any) => {
            const currentPath = path.join(prevPath, folder, path.sep);
            isNotExits = !fs.existsSync(currentPath);
            if (isNotExits) {
                fs.mkdirSync(currentPath);
            }
            return currentPath;
        }, '');
    return isNotExits;
}