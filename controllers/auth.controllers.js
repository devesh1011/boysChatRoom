const User = require("../models/User");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    try {
        console.log(req.body)

        // const { username, email, password } = req.body;

        // const user = User.find({ username });

        // if (user) {
        //     return res.json("User Already Exists!")
        // };

        // const hashedPassword = bcrypt.hash(password, 10);

        // const newUser = User({
        //     username,
        //     email,
        //     password: hashedPassword
        // });

        // await newUser.save();

        res.redirect("/");

        // return res.status(201).json({ "sucess": true, newUser });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}

module.exports = {
    signUp
}