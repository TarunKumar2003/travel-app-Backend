import express from "express";
import {getHotels} from "../controllers/hotel.controller.js";
//Make the Router 
const hotelRouter = express.Router();

hotelRouter.get("/all-hotels", getHotels);
//hotelRouter.get("/all-category", controller);


export default hotelRouter;