const express = require("express");
const { addUser, getUsers } = require("../controller/users");

module.exports = function (app) {
  // define the home page route
  app.get("/users", async (req, res) => {
    return await getUsers(req, res);
  });

  app.post("/users/adduser", async (req, res) => {
    return await addUser(req, res);
  });
};
