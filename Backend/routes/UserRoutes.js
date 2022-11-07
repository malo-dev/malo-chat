const passport = require("passport");
const { register, login } = require("../controllers/UserControllers");

const Router  = require("express").Router();

Router.post("/register", register);
Router.post("/login", login);
Router.get("/google", passport.authenticate('google', {
	scope : ['profile']
}))
module.exports = Router