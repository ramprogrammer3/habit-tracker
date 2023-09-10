const express = require("express");
const passport = require('passport');
const router = express.Router();

const { signUp, signIn, create, createSession, destroySession, forgetPassword, resetPassword } = require("../controllers/user_controller");
const { home, notFound } = require("../controllers/home_controller");

router.get("/", home);
router.get("/users/sign-up", signUp);
router.get("/users/sign-in", signIn);
router.post("/users/create", create)

// use passport as a middleware to authenticate
router.post("/users/create-session", passport.authenticate(
    'local',
    { failureRedirect: "/users/sign-in" },
), createSession)

// used for deleting the user session
router.get("/users/sign-out", destroySession);

// take to forget password page
router.get("users/forget-password", forgetPassword)
// change the password

router.post("/users/reset-password", resetPassword)


const { createHabit, toggleStatus, deleteHabit, editHabit } = require("../controllers/habit_controller");

// create a new habit
router.post("/users/habit/create-habit", createHabit);

// change the status of habit

router.get("/users/habit/toggle-status", toggleStatus);

// delete the habit
router.get("/users/habit/delete-habit", deleteHabit);

// update the habit

router.post("/users/habit/edit-habit", editHabit)

router.get("/404",notFound)


module.exports = router;