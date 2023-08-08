const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const errorhandler = require("errorhandler");
const cors = require("cors");
const {
  development,
  jsonLimit,
  urlEncodedLimit,
  xPoweredBy,
} = require("../const/app.const");
const express = require("express");
const app = express();

app.use(cors({ origin: true }));
app.disable(xPoweredBy);
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false, limit: urlEncodedLimit }));
app.use(bodyParser.json({ limit: jsonLimit }));
if (process.env.NODE_ENV === development) {
  // only use in development
  app.use(errorhandler());
}


module.exports = app;
