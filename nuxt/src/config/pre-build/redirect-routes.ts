import axios from "axios";
import {FIREBASE} from '../firebase';
import fs from 'fs'
import path from 'path'
import { filePath } from "../../modules/html-page-util/file-path.function";

export default async function() {
    var result = await axios.get(process.env.API_URL + '/redirect-routes?_limit=10000');
    if (result && result.data) {
        var redirects:any = [];
        result.data.forEach((t:any) => {
            redirects.push(
                {
                    "source": t.From,
                    "destination": t.To,
                    "type": t.StatusCode
                }
            )
        });
        const extraFilePath = path.join(
            process.cwd(), 'firebase.json'
        )

        FIREBASE.hosting.redirects = redirects;
        rewriteFunctions(FIREBASE)
        await fs.writeFileSync(extraFilePath, JSON.stringify(FIREBASE));
    }
}

function rewriteFunctions(firebase:any){
    var files = filePath('./functions/controllers','controller.js');
    files.forEach(path=>{
        var splitPaths = path.split('\\');
        var fileName = splitPaths[splitPaths.length - 1].split(".controller.js")[0];
        firebase.hosting.rewrites.push({
            "source":`/${fileName}`,
            "function":`${fileName}`
        })
    })
}
