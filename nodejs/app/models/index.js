const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
//Mudamos abaixo
db.acolhedores = require("./acolhedor.model.js")(mongoose);

module.exports = db;