const express = require("express");
const passport = require('passport');
const router = express.Router();

const {signUp, signIn, create, createSession, destroySession} = require("../controllers/user_controller");
const {home} = require("../controllers/home_controller");

router.get("/",home);
router.get("/users/sign-up",signUp);
router.get("/users/sign-in",signIn);
router.post("/users/create",create)

// use passport as a middleware to authenticate
router.post("/users/create-session",passport.authenticate(
    'local',
    {failureRedirect : "/users/sign-in"},
),createSession)


// used for deleting the user session
router.get("/users/sign-out",destroySession);


module.exports = router;