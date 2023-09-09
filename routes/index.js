const express = require("express");
const router = express.Router();

const {signUp, signIn, create} = require("../controllers/user_controller");
const {home} = require("../controllers/home_controller");

router.get("/",home);
router.get("/users/sign-up",signUp);
router.get("/users/sign-in",signIn);
router.post("/users/create",create)






module.exports = router;