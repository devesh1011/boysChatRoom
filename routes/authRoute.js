const passport = require("passport");
const { register, login, logout } = require("../controllers/auth.controller");

const router = require("express").Router();

router
  .post("/register", register)
  .post("/login", login)
  .get("/logout", passport.authenticate("jwt", { session: false }), logout);

module.exports = router;
