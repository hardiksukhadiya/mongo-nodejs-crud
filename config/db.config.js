const mongoose = require("mongoose");

const dbURL = process.env.mongoURI;
mongoose.connect(`${dbURL}`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports = db;
