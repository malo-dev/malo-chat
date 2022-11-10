const mongoose = require('mongoose')
const Database = () => {
	mongoose.connect('mongodb+srv://malochat:malochat37700@cluster0.dysk2py.mongodb.net/malochat') 
	.then(() => console.log('database is connected successfully '))
	.catch(err => console.log(err))
}
module.exports = Database