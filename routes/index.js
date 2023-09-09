const express = require("express");
const passport = require('passport');
const router = express.Router();

const {signUp, signIn, create, createSession, destroySession, forgetPassword, resetPassword} = require("../controllers/user_controller");
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

// take to forget password page
router.get("users/forget-password",forgetPassword)
// change the password

router.post("/users/reset-password",resetPassword)


const {createHabit, toggleStatus} = require("../controllers/habit_controller");

// create a new habit
router.post("/habit/create-habit",createHabit);

// change the status of habit

router.get("/habit/toggle-status",toggleStatus);


module.exports = router;