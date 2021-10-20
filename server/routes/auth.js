const express = require("express");
const router = express.Router();
const { validateRegister, validateLogin } = require("../validate");
const { registerUser, loginUser, logoutUser } = require("../controllers/auth");

router.route("/register").post(validateRegister, registerUser);

router.route("/login").post(validateLogin, loginUser);

router.route("/logout").post(logoutUser);

module.exports = router;
