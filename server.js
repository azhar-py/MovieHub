import express from 'express'
import dotenv from "dotenv";
import connectDB from "./src/config/database.js";
import router from './src/routes.js';



dotenv.config();
connectDB();


const app  = express()
const PORT  = 3000
app.use(express.json());
// Routes
app.use("/api", router);



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

