const express = require('express');

const dotenv = require('dotenv')
const Database = require('./config/database');
const HandleError = require('./middlewares/Error');
const routeOfUser = require('./routes/Authentification/routeOfUser');
const server = express();
Database()
dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');
server.use(express.json())
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.use(jsonParser)
server.use(urlencodedParser)
server.use(cors(corsOptions))
server.use('/api/auth', routeOfUser)
server.use(express.json())
server.use(HandleError.HandleError)
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
	console.log("Everything is up and  runing on port  http://localhost:" + PORT);
})
