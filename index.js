import express from "express";
import dotenv from "dotenv";
// import  {connection} from "./db/connection.js";
import connection from "./db/connection.js";
import allroutes from "./routes/allroutes.js"
dotenv.config();
const app = express();
// connection()
console.log("nuihyuguybhbyuvvhjbgyv")
app.use(express.json())
connection
app.use(allroutes)
app.listen(process.env.PORT, () => {
    console.log("Server is created");
});
