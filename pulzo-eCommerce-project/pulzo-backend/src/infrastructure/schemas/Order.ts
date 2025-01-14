import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Order", OrderSchema);
