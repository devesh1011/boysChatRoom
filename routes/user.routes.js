const express = require("express");
const { signUp } = require("../controllers/auth.controllers")

const router = express.Router();

router
    .get('/signup', (req, res) => {
        res.render("form.ejs")
    })
    .post('/signup', signUp);

module.exports = router;