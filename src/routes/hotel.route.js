import express from "express";
import {getAllCategories, getAllHotels} from "../controllers/hotel.controller.js";
//Make the Router 
const hotelRouter = express.Router();

hotelRouter.get("/all-hotels", getAllHotels);
hotelRouter.get("/all-category", getAllCategories);


export default hotelRouter;