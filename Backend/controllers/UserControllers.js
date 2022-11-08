const User = require("../models/User");
const bcrypt = require('bcrypt');
const { json } = require("body-parser");
 
module.exports.register =async (req, res, next) => {
try {
		const {username, email, password,profileImage} = req.body;
	 console.log(req.body)
	const ChekIfUserExist = await User.findOne({ username })
	if (ChekIfUserExist) {
		return res.json({ msg: "Username already used", status: false })
	}
	const CheckIfEmailExist = await User.findOne({ email })
	if (CheckIfEmailExist) {
		return json({ msg: "Email has already used", status: false })
	}
	const hashingOfPassword = await bcrypt.hash(password, 10)
	const user = User.create({
		email,
		username,
		password: hashingOfPassword,
		profileImage
	});
	
	delete user.password;
	return res.json({status : true,user})
} catch (error) {
	next(error)
}
}
	
	module.exports.login =async (req, res, next) => {
		try {
	
		const { username,password } = req.body;
	 
	const ChekIfUserExist = await User.findOne({ username })
			if (!ChekIfUserExist) {
		console.log(req.body);
		return res.json({ msg: "username used is incorrect", status: false });
	}
	const isPasswordVerify = await bcrypt.compare(password, ChekIfUserExist.password)
	if (!isPasswordVerify) {
		return res.json({msg : "Your password is wrong , "})
	}

	delete ChekIfUserExist.password;
	return res.json({status : true,ChekIfUserExist})
} catch (error) {
	next(error)
}
}
	
		
	