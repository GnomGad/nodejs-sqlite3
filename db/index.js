const DB = require("./DB");
const db = new DB(process.env.DBPATH);

//const {Example} = require("./models");

const models = {};

// const example = new Example(db, models, "examples");
// example.createTable();

// models["Example"] = example;

module.exports = { db, models };
