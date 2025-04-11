const express = require("express")
const userController = require("../controller/userController.js")
const router = express.Router();

router.post("/register", userController.Register)

module.exports = router;