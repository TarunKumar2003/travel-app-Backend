import express from "express";
import { createWishList, deleteItemFromWishlist } from "../controllers/wishlist.controller.js";

const wishListRouter = express.Router();

wishListRouter.route("/").post(createWishList);
wishListRouter.route("/:id").delete(deleteItemFromWishlist);

export default wishListRouter;