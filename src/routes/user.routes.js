import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// Create the user Routes
// login,register,
userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

export default userRouter;
