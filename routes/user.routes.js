const express = require("express");
const authController = require("../controllers/auth.controllers")
const passport = require("../config/passport");

const router = express.Router();

router
    .get('/logout', (req, res) => {
        if (!req.isAuthenticated()) {
            return res.json("first login the route")
        }

        req.logOut((err) => {
            if (err) {
                console.log(err);
            }
            return res.json("User logout successful")
        })
    })
    .post('/signup', authController.signup)
    .post('/login', passport.authenticate('local', {
        failureMessage: true
    }), (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect(303, '/protected');
        } else {
            res.redirect(303, '/')
        }
    })

module.exports = router;