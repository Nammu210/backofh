const { registerUser, loginUser } = require("../Controller/userController");

const userdbroute = require("express").Router();

userdbroute.post("/register", registerUser);
userdbroute.post("/login", loginUser);

module.exports = userdbroute;
