import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// Create the user Routes 
// login,register,
userRouter.route("/register").post(registerUser);


export default userRouter;