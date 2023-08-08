const functions = require("firebase-functions");

module.exports = function(app){
    return functions.https.onRequest(app);
}