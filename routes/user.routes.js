const express = require("express");
const authController = require("../controllers/auth.controllers")
const passport = require("../config/passport");

const router = express.Router();

router
    .post('/signup', authController.signup)
    .post('/login', passport.authenticate('local', {
        failureRedirect: '/',
        failureMessage: true
    }), (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect(303, '/protected'); 
        }
    });

module.exports = router;