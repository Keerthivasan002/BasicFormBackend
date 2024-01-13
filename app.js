import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import route from "./routes/route.js";
import cors from "cors";

dotenv.config();

const app= express();

app.use (cors({origin:"*"}))
app.use(express.json())
app.use("/",route)

mongoose.connect(process.env.URL)
.then(()=>console.log("mongo_connected"))
.catch(error =>console.log(error))

app.listen(5000,()=>{
    console.log("node_connected");
})