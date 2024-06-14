import Wishlist from "../models/wishlist.model.js";

const createWishList = async (req, res)=>{
    const { hotelId } = req.body;

    if(!hotelId){
        return res.status(400).json({
            message:" All Fields are compulsory"
        })
    }

    // create wishList into the DB
     const existedWishlist = await Wishlist.findOne({hotelId});
     if(existedWishlist){
        return res.status(409).json({
           message: "this is Already exist"
        });
     }

     const wishList = await Wishlist.create({
        hotelId
     })
     console.log("wishlist created successfully");
     const createdWistlist = await Wishlist.findOne({hotelId});

     if(!createWishList){
        return res.status(500).json({
            message: "Something went wrong creating the wishlist "
        })
     }

     return res.status(201).json({
        message: "Successfully creating the wishlist",
        data: wishList
     })
}

 /// Delete Item from wishlist 
 const deleteItemFromWishlist =  async (req, res)=>{
      const { id } = req.params;
      if(!id){
         return res.status(500).json({
            message: "not deleted"
         }) 
      }
      
      await Wishlist.findByIdAndDelete(id);
      return res.status(200).json({
         message: " item deleted  successfully "
      }) 

   //  try{
   //       await Wishlist.findByIdAndDelete(req.params.id);
   //       res.json({ message: "Hotel Deleted From Wishlist"})
   //   }catch(err){
   //       res.status(500).json({ message: "Could not delete hotel from wishlist" })
   //   }

 }

export {
    createWishList,
    deleteItemFromWishlist
}