import bcrypt from "bcrypt"
import registerschemamodal from "../model/schema.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export const Register = async(req,res)=>{
    try {
        const password = req.body.password;
        const hassedpassword = await bcrypt.hash(password,10);
        const newUser = new registerschemamodal({
            username : req.body.username,
            email : req.body.email,
            password : hassedpassword,
        })
        const savedUser = await newUser.save()
        res.json(savedUser);
    } catch (error) {
        res.status(500).json("Registration is failed")
    }
}

export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user in the database by email
      const user = await registerschemamodal.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: "Incorrect password" });
      }
  
      // If the password is correct, create and send a JWT token
      jwt.sign({ user }, process.env.secretkey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          return res.status(500).json({ message: "JWT token creation failed" });
        }
        res.json({ token });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Login failed" });
    }
  };
  
export const getDetails = async(req,res)=>{
  try {
    const userDetails = await registerschemamodal.find()
    res.status(200).json(userDetails)
  } catch (error) {
    res.status(500).json("Request failed")
  }
 

}