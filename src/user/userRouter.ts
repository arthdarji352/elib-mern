import express from "express";
import { createUser, login } from "./userController";

const userRouter = express.Router();

// routes
userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
