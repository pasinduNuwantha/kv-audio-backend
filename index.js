import express from "express";
import bodyPArser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


const app = express()

app.use ( bodyParser.json())

app.use((req,res,next)=>{
    const token  = req.header("Athorization")

    if(token!=null){
        token= token.replace("Bearer ","")

        jwt.verify(token,"kv secret 89!",(err,decode)=>{
            if(!err,){
                console.log(decoded);
                
            }

        })
    }
    
    console.log("request is here")
    next()

})

let mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection Established Successfully")
})

app.use("/api/users",userRouter)

app.use("/api/products",productRouter)

app.listen(3000,()=> { 
    console.log("Server is running on port 3000")
})
