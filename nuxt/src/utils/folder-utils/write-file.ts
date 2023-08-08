import fs from 'fs';
export function writeFileSync(path: string, content: any, isString: boolean = false) {
    content = !isString? JSON.stringify(content) : content
    fs.writeFileSync(path, content);
}