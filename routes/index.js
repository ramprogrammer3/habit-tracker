const express = require("express");
const router = express.Router();

const {signUp} = require("../controllers/user_controller");

router.get("/users/sign-up",signUp);






module.exports = router;