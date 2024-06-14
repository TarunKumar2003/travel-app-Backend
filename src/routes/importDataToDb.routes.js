
import express from "express";
import  Hotel  from "../models/hotel.model.js";
import Category from "../models/category.model.js";
import hotels from "../data/hotel.js";
import categories from "../data/categories.js";
const dataIntoDbRouter = express.Router();

dataIntoDbRouter.route('/hotels').post(async (req, res)=>{
      try {
         await Hotel.deleteMany({});
         const hotel = await Hotel.insertMany(hotels.data);
         return res.status(201).json({
            success: true, 
            message: "successfully push data into db",
            data: hotel
         })
      } catch (error) {
        console.log(error);
        res.json({ message: "Could not add data to DB"})
      }
})

// Define one more Route 
dataIntoDbRouter.route('/category').post( async (req, res)=>{
    try {
        await Category.deleteMany({});
        const allCategories = await Category.insertMany(categories.data);
        return res.status(201).json({
            success: true, 
            message: "successfully push data into db",
            data: categories
         })

    } catch (error) {
        console.log(error);
        res.json({ message: "Could not add data to DB"})
    }
})

export {
    dataIntoDbRouter
}