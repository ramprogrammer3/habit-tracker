const express = require("express");
const router = express.Router();

const {signUp} = require("../controllers/user_controller");
const {home} = require("../controllers/home_controller");

router.get("/",home);
router.get("/users/sign-up",signUp);






module.exports = router;