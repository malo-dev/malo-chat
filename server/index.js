import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import AuthRoute from './Routes/AuthRoutes.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
dotenv.config()
app.use(express.static('public')); 
app.use('/images', express.static('images'));
mongoose.connect(process.env.MONGO_DB_URL)
	.then(() => {
	app.listen(process.env.PORT,()=>console.log("Listening on port http://localhost:"+process.env.PORT))
	})
	.catch((err) => {
	console.log(err); 
	})
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)