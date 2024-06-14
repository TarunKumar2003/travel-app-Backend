import express from "express";
import config from "./config/server.config.js";
import dbConnect from "./config/dbConnect.config.js";
import hotelRouter from "./routes/hotel.routes.js";
import userRouter from "./routes/user.routes.js";

import { dataIntoDbRouter } from "./routes/importDataToDb.routes.js";
const app = express();


// configure middleware 
app.use(express.json({
   limit: "16kb"
}));
app.use(express.urlencoded({
   extended: true,
   limit: "16kb"
}));
app.use(express.static("public"));




// User related Routed 
app.use("/api/v1/users", userRouter);



// hotel related Routes
app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/hotels-into-db", dataIntoDbRouter);
app.use("/api/v1/categories-into-db", dataIntoDbRouter);
//app.use("/api/v1/hotel", hotelRouter);


app.listen(config.PORT,async ()=>{
   try {
    await dbConnect();
     console.log(`Server is listening at PORT ${config.PORT}`);
   } catch (error) {
    console.log(error);
    process.exit(1);
   }
})