const express = require("express");
// const secureApi = require("../../middleware/secureapi");
const registrationController = require("../../controller/registrationController");
const _= express.Router();

_.post("/registration", registrationController)

module.exports = _ ;