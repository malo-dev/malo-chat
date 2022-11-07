const express = require('express');
const cors = require('cors');
// const passport_setup = require('./config/passport_setup')
const Router = require('./routes/UserRoutes');
const app = express()
require('./config/database')()
require('dotenv').config();
app.use(cors())
app.use(express.json())

app.use('/api/auth', Router)

app.listen(process.env.PORT , () => {
	console.log(`my server is turning on pory : http://localhost:${process.env.PORT }`);
})