const dotenv = require("dotenv");
const functions = require("firebase-functions");

const env = functions.config().runtime.env;
if (process.env && process.env === "development") {
  const envDev = dotenv.config({ path: "./environments/.env.dev" });
  if (envDev.error) {
    throw envDev.error;
  }
} else if (env && env === "stage") {
  const envStage = dotenv.config({ path: "./environments/.env.stage" });
  if (envStage.error) {
    throw envStage.error;
  }
} else if (env && env === "prelive") {
  const envPreLive = dotenv.config({ path: "./environments/.env.pre.live" });
  if (envPreLive.error) {
    throw envPreLive.error;
  }
} else if (env && env === "live") {
  const envLive = dotenv.config({ path: "./environments/.env.live" });
  if (envLive.error) {
    throw envLive.error;
  }
} else {
  const envDev = dotenv.config({ path: "./environments/.env.dev" });
  if (envDev.error) {
    throw envDev.error;
  }
}

module.exports = {
  ...require("./controllers/jobs.controller.js"),
  // ...require("./controllers/careers.controller.js")
};
