const Mongoose = require("mongoose");
require('dotenv').config();
const database = () => {
	Mongoose.connect(process.env.DB_URL)
	.then(() => {
	console.log('database is connected with successfully');
	})
	.catch((err) => {
	console.log('connexion to database is failed , try to check your network conection or check this error : ' + err.message);
})
}
module.exports = database