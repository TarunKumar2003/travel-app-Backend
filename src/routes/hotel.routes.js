import express from "express";
import {
  getAllCategories,
  getAllHotels,
  getSingleHotelData,
} from "../controllers/hotel.controller.js";
//Make the Router
const hotelRouter = express.Router();

hotelRouter.get("/all-hotels", getAllHotels);
hotelRouter.get("/all-category", getAllCategories);
hotelRouter.get("/:id", getSingleHotelData);
hotelRouter.get("/", getAllHotelsBasedOnCategory);

export default hotelRouter;
