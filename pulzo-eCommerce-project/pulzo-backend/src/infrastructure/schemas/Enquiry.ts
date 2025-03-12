import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  productName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  issueDetails: { type: String, required: true },
});

export default mongoose.model("Enquiry", EnquirySchema);
