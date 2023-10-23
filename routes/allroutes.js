import express, { response } from "express";
import { Register, deleteUser, getDetails, updateDetail } from "../controller/usercontroller.js";
import { Login } from "../controller/usercontroller.js";
const router = express.Router();
import imageupload from "../model/imageupload.js";
import { Verifytoken } from "../utils/VerifyToken.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
router.get('/',(req,res)=>{
    res.send("ab mai kya btau tumhe")
})
router.post("/register",Register)
router.post("/upload-image", imageupload.single("image"), (req, res) => {
    if (req.file) {
      // The image has been uploaded successfully. You can respond with the file path or any other relevant information.
      res.json({ imagePath: req.file.path });
    } else {
      // No image was uploaded or an error occurred during the upload.
      res.status(400).json({ message: "No image uploaded" });
    }
  });
  router.post("/login",Login)
  router.post("/profile",Verifytoken,(req,res)=>{
    jwt.verify(req.token,process.env.secretkey,(err,authData)=>{
        if(err){
            response.send({result:"Invalid Token"})
        }
        else{
            res.json({
                message : " profile accesed",
                authData
            })
        }
    })
  })
  router.get("/getdetails",getDetails)
  router.patch("/update/:id",updateDetail)
  router.delete("/delete/:id",deleteUser)
export default router