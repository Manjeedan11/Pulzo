import express from "express";
import {
  getEnquires,
  getEnquiryById,
  createEnquiry,
  updateEnquiryById,
  deleteEnquiryById,
} from "../applications/enquiry";

export const enquiryRouter = express.Router();

enquiryRouter.route("/").get(getEnquires).post(createEnquiry);
enquiryRouter
  .route("/:id")
  .get(getEnquiryById)
  .delete(deleteEnquiryById)
  .patch(updateEnquiryById);
