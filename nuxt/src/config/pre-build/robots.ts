import axios from "axios";
import fs from 'fs'
import path from 'path'

export default async function() {
  await generate(process.env.API_URL, "robots.txt");
}
async function generate(uri:any, fileName:any) {
  var result = await axios.get(uri + '/robots');
  if (result && result.data) {
    const extraFilePath = path.join(
      process.cwd(), "dist", fileName
    )
    if(result.data.rules){
      var productionRobot = result.data.rules.split(":production")
      if(productionRobot.length > 1)
      {
        await fs.writeFileSync("robots.production.txt", productionRobot[1]);
      }
    }
    var targetProduction:any =process.env.TARGET_PRODUCTION; 
    await fs.writeFileSync(extraFilePath, (targetProduction === "true" || targetProduction === true ) && productionRobot.length > 1 ? productionRobot[1] : productionRobot[0]);
  }
}
