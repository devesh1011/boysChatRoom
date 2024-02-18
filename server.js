const express = require('express');
const connectDB = require("./config/db");
require("./config/auth");
const userRoute = require("./routes/user.routes");
const passport = require("passport");
const session = require("express-session");
const flash = require("express-flash");

const app = express();

const sessionOptions = {
    secret: 'aksjdadfaidl',
    resave: true,
    saveUinitialized: true,
    cookie: { secure: true }
}

app.use(session({ sessionOptions }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the boys chat room")
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