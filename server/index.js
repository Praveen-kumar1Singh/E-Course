import express from 'express'
import bookRoute from './routes/book.route.js'
import userRoute from './routes/User.route.js'
import dotenv from 'dotenv'
import Cors from 'cors'
import { mongoose } from 'mongoose';

//dotenv-
dotenv.config()
//express taken to app---
const app = express();
//port and mongodb from env--
const Port = process.env.PORT || 3000;
const Mongodb = process.env.MONGO_URI;

//middleware
app.listen(Port, () => console.log(`server is listen at ${Port}`))
app.use(Cors())
app.use(express.json())

//connect to mongodb-----------
try {
    mongoose.connect(Mongodb)
    console.log("mongodb connected")
} catch (error) {
    console.log("ERROR : ", error)
}

//routes
app.use("/book",bookRoute)
app.use("/user",userRoute)
