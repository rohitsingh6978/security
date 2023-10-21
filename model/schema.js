import mongoose from "mongoose";

const registerschema = new mongoose.Schema({
    username :{
        type : String,
        trim : true,
    },
    email :{
        type : String,
        trim : true,
    },
    password : {
        type : String,
        trim : true,
    },
    profile:{
        type : String,
    }
})

const registerschemamodal = mongoose.model("collection",registerschema)

export default registerschemamodal