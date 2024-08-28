import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoute.js"
import tweetRoutes from "./routes/tweetRoute.js"
import cors from "cors";


dotenv.config({
    path:".env"
})
databaseConnection();
const app= express();

//middlwares
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));

//api route
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/tweet",tweetRoutes);


app.listen(process.env.PORT,()=>{console.log(`Server started at  port no : ${process.env.PORT}`)})