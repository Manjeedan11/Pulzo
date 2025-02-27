import express from "express";
import {
  getEnquires,
  getEnquiryById,
  createEnquiry,
  updateEnquiryById,
  deleteEnquiryById,
} from "../applications/enquiry";
import { isAuthenticated } from "./middleware/authentication-middleware";

export const enquiryRouter = express.Router();

enquiryRouter
  .route("/")
  .get(isAuthenticated, getEnquires)
  .post(isAuthenticated, createEnquiry);
enquiryRouter
  .route("/:id")
  .get(isAuthenticated, getEnquiryById)
  .delete(isAuthenticated, deleteEnquiryById)
  .patch(isAuthenticated, updateEnquiryById);
