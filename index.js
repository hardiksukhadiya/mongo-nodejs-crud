const express = require("express");

const app = express();

const users = require("./routes/users");

// load your env in process.env
require("custom-env").env("dev");

// connect to db
const db = require("./config/db.config");

app.use(express.json()); // to parse all request to json
app.use(express.urlencoded({ extended: true }));

// load all the routes
require("./routes/users")(app);
//app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
