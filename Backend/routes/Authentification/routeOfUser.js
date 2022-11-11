const express = require('express');
const User = require('../../models/User');
const asyncHandler = require('express-async-handler');
const Token = require('../../utils/Token');
const authMidller = require('../../middlewares/Authmiddleware');
const { getMessages, getAllUsers,logOut,setAvatar } = require('../../controllers/controllerOfMessages');
Set
const routeOfUser = express.Router()

routeOfUser.post('/register',asyncHandler(async (req, res, next) => {

try {
		const {username, email, password,profileImage } = req.body
	const ExistUser = await User.findOne({email : email})
	if (ExistUser) {
		throw new Error ('User Exist')
	}
	const CreatedUser = await User.create({ username, email, password,profileImage })
	res.json({
			_id: CreatedUser._id,
			username: CreatedUser.username,
			email: CreatedUser.email,
			password: CreatedUser.password,
			profileImage : CreatedUser.profileImage,
			token : Token(CreatedUser._id)
		})
} catch (error) {
	console.log(error);
}
} ))
//   here i make authentification
routeOfUser.post('/login', asyncHandler(async (req, res) => {
	
	const { email, password } = req.body
	const user = await User.findOne({ email })
	if (!(user && (await user.isPasswordMatch(password))) ) {
		res.status(401)
		throw new Error('Invalid credentials')
	} else if (user && (await user.isPasswordMatch(password))) {
		res.status(200);
		res.json({
			_id: user._id,
			username: user.username,
			email: user.email,
			password: user.password,
			profileImage:user.profileImage,
			token : Token(user._id)
		})
	}
}))

routeOfUser.get('/', authMidller,(req,res) => {
	res.send(req.user)
})
routeOfUser.get('/allusers/:id', getAllUsers)
routeOfUser.post("/setavatar/:id", setAvatar);
routeOfUser.get("/logout/:id", logOut);
module.exports = routeOfUser
 