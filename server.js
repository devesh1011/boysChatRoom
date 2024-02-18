const express = require('express');
const connectDB = require("./config/db");
require("./config/passport");
const userRoute = require("./routes/user.routes");
const passport = require("./config/passport");
const session = require("express-session");
const flash = require("express-flash");

const app = express();

const sessionOptions = { secret: "ashkfaskljdfas", resave: false, saveUninitialized: true }

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to the boys chat room")
});

app.use('/users', userRoute);

app.listen(5000, () => {
    connectDB();
    console.log("App is listening to port 5000");
})