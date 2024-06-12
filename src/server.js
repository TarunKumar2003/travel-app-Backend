import express from "express";
import config from "./config/server.config.js";
import dbConnect from "./config/dbConnect.config.js";
import hotelRouter from "./routes/hotel.route.js";

import { dataIntoDbRouter } from "./routes/importDataToDb.route.js";
const app = express();

app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/hotels-into-db", dataIntoDbRouter);
app.use("/api/v1/categories-into-db", dataIntoDbRouter);

app.listen(config.PORT,async ()=>{
   try {
    await dbConnect();
     console.log(`Server is listening at PORT ${config.PORT}`);
   } catch (error) {
    console.log(error);
    process.exit(1);
   }
})