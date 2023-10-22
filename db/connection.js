import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connection = mongoose.connect(process.env.Mongo_url)
.then((response)=>{
    console.log("connection is created with mongodb")
})
.catch((error)=>{
    console.log(error)
})

export default connection;
