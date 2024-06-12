
import  Hotel  from "../models/hotel.model.js"

// We are writing All the Controller related to hotel

const getHotels = async (req, res)=>{
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

export {
      getHotels
}