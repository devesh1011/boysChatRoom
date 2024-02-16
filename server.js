const express = require('express');
const connectDB = require("./config/db");
require("./config/auth");
const passport = require("passport");

const app = express();

app.set("view-engine", "ejs");

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/auth/google', passport.authenticate('google', ({ scope: ['email', 'profile'] }))
)

app.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure'
})
);

app.get('/auth/failure', (req, res) => {
    // res.send('Something went wrong');
    res.redirect('/');
})

app.get('/protected', (req, res) => {
    res.send("Hello");
});

app.listen(5000, () => {

    connectDB();
    console.log("App is listening to port 5000");
})