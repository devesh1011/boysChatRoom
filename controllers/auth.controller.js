const User = require("../models/User");
const { genPassword, validPassword } = require("../utils/handlePassword");
const issueToken = require("../utils/issueToken");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, msg: "User not found" });
    }

    const isValid = await validPassword(password, user.password);

    if (!isValid) {
      return res.status(401).json({ success: false, msg: "Invalid password" });
    }

    const token = issueToken(user);

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user) {
      return res.status(201).json({
        success: false,
        msg: "User already exists. Try logging in instead",
      });
    }

    const hashedPassword = await genPassword(password);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    const token = issueToken(newUser);

    res.json({ success: true, user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    return res
      .status(200)
      .json({ success: true, msg: "You have been logged out" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = {
  login,
  register,
  logout,
};
