import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  keyFeatures: {
    type: [String],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  sold: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
});

export default mongoose.model("Product", ProductSchema);
