import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connection = mongoose.connect("mongodb+srv://rohitbaghel073:Rohit123@cluster0.rapu0zl.mongodb.net/securityfeature")
.then((response)=>{
    console.log("connection is created with mongodb")
})
.catch((error)=>{
    console.log(error)
})

export default connection;
