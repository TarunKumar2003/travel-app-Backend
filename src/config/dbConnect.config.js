import mongoose, { Mongoose } from "mongoose";
import config from "./server.config.js"
// In this module we are writing the logic for our server connect to database 

async function dbConnect(){
    try {
     const connection = await mongoose.connect(config.MONGODB_URI);
     console.log("Database connected Successfully");
   } catch (error) {
    console.log(error);
   }
    
}

export default dbConnect;