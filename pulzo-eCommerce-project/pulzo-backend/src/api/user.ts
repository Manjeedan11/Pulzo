import express from "express";
import {
  getUser,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../applications/user";

export const userRouter = express.Router();

userRouter.route("/").get(getUser).post(createUser);
userRouter
  .route("/:id")
  .get(getUserById)
  .delete(deleteUserById)
  .patch(updateUserById);
