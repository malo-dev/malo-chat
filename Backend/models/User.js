const { default: mongoose } = require("mongoose");
const SchemaOfUser = new mongoose.Schema({
	username: {
		type: String,
		required : true
	},
	email: {
		type: String,
		required: true,
		unique : true
	},
	password: {
		type: String,
		required: true
	},
		isimagesset: {
		type: Boolean,
		default: false
	},
	profileImage: {
		type: String,
		default :""
		}
})

const User = mongoose.model('Users', SchemaOfUser);
module.exports = User