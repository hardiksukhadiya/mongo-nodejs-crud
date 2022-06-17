const userModel = require("../models/users");

async function addUser(request, response) {
  console.log(request.body);
  const user = new userModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
}

async function getUsers(request, response) {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
}

module.exports = { addUser, getUsers };
