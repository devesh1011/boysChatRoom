const express = require('express');
const connectDB = require("./config/db");
require("./config/auth");
const userRoute = require("./routes/user.routes");
const bodyParse = require("body-parser");
const passport = require("passport");
const bodyParser = require('body-parser');

const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view-engine", "ejs");

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.use('/users', userRoute);

// app.get('/auth/google', passport.authenticate('google', ({ scope: ['email', 'profile'] }))
// )

// app.get('/google/callback', passport.authenticate('google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/failure'
// })
// );

// app.get('/auth/failure', (req, res) => {
//     // res.send('Something went wrong');
//     res.redirect('/');
// })

// app.get('/protected', (req, res) => {
//     res.send("Hello");
// });

app.listen(5000, () => {

    connectDB();
    console.log("App is listening to port 5000");
})