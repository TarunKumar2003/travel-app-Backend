
import  Hotel  from "../models/hotel.model.js"
import Category from "../models/category.model.js";
// We are writing All the Controller related to hotel

// Fetch All Hotels from the DB
const getAllHotels = async (req, res)=>{
    //const hotels = await Hotel.find({});
    try {
       const hotels = await Hotel.find({});
       if(hotels){
            return res.status(200)
            .json({
                success:true,
                message:"Hotel data fetched from Db Successfully",
                error:{},
                data:hotels
            })
       }
       

    } catch (error) {
        return res.status(404)
        .json({
            success:false,
            message:"Hotel data Not Found",
            error:{error},
            data:{}
        })
    }
}


// Fetch All categories from DataBase 
const getAllCategories = async (req, res)=>{
   try {
      const categories = await Category.find({});
      if(categories){
        return res.status(200)
            .json({
                success:true,
                message:"all categories fetched from Db Successfully",
                error:{},
                data:categories
            })
      }

   } catch (error) {
     return res.status(404)
     .json({
         success:false,
         message:"Categories  Not Found",
         error:{error},
         data:{}
     })
   }
}

// Fetch Single Hotel Data from DB based on ID
const getSingleHotelData = async (req, res)=>{
    const { id } = req.params;
    try {
        const hotelData = await Hotel.findById(id);
        if(hotelData){
                return res.status(200)
                    .json({
                        success:true,
                        message:"Hotel data fetched from Db Successfully",
                        error:{},
                        data:hotelData
                    })
              }
        }
        catch (error) {
            return res.status(404)
            .json({
                success:false,
                message:"hotekData  Not Found",
                error:{error},
                data:{}
            })
       }
}

export {
      getAllHotels,
      getAllCategories,
      getSingleHotelData
}