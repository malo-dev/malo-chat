const jwt = require('jsonwebtoken')
const Token =  (idOfUser) => {
	return jwt.sign({ id: idOfUser }, process.env.KEY_JWT, {
		expiresIn : '30d'
	})
}
module.exports = Token