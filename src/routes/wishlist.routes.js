import express from "express";
import {
  createWishList,
  deleteItemFromWishlist,
  getWishlist,
} from "../controllers/wishlist.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";

const wishListRouter = express.Router();

wishListRouter.route("/").post(verifyUser, createWishList);
wishListRouter.route("/:id").delete(verifyUser, deleteItemFromWishlist);
wishListRouter.route("/").get(verifyUser, getWishlist);

export default wishListRouter;
