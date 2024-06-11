import express from "express";
import config from "./config/server.config.js";
import dbConnect from "./config/dbConnect.config.js";
const app = express();

app.get('/', (req, res)=>{
    return res.send("Hellomnkng,Server is Up")
});

app.listen(config.PORT,async ()=>{
   try {
    await dbConnect();
     console.log(`Server is listening at PORT ${config.PORT}`);
   } catch (error) {
    console.log(error);
    process.exit(1);
   }
})