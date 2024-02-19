const User = require("../models/User");

require("dotenv").config();

const signup = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const newUser = new User({ email, username });

        const registeredUser = await User.register(newUser, password);

        res.status(201).send(registeredUser);
    } catch (error) {
        console.log(error.message)
        return res.json(error.message);
    }
}

const login = async (req, res) => {
    console.log("User logged in");
}

module.exports = {
    signup, login
}