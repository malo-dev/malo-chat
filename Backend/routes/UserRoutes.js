const passport = require("passport");
const { register, login } = require("../controllers/UserControllers");
const { postProfile, getProfile } = require("../controllers/UserImageProfileController");
const Router  = require("express").Router();

Router.post("/register", register);
Router.post("/login", login);

Router.get('/getprofile',getProfile)
Router.post('/postprofile',postProfile)

Router.get("/google", passport.authenticate('google', {
	scope : ['profile']
}))
module.exports = Router