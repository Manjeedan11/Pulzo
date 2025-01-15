import { ProductDTO } from "../domain/DTO/product";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
import Product from "../infrastructure/schemas/Product";
import { Request, Response, NextFunction } from "express";

const products = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    _id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    _id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    _id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    _id: "4",
    name: "Bose QuiteComfort",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    _id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    _id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    _id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    _id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Product.find().populate("categoryId");
    res.status(200).json(data);
    return;
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = ProductDTO.safeParse(req.body);
    if (!result.success) {
      throw new ValidationError("Products fields is not found");
    }
    await Product.create(result.data);
    res.status(201).send("Product added successfully");
    return;
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Product.findById(id).populate("categoryId");
    if (!data) {
      throw new NotFoundError("Product not found");
    }
    res.status(200).json(data).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError("Product not found");
    }
    res.status(200).send(`Product info at ${id} deleted successfully`);
    return;
  } catch (error) {
    next(error);
  }
};

export const updateProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = ProductDTO.safeParse(req.body);
    if (!result.success) {
      throw new ValidationError("Product fields is not found");
    }
    const id = req.params.id;
    const data = await Product.findByIdAndUpdate(id, result.data);

    if (!data) {
      throw new NotFoundError("Product not found");
    }

    res.status(200).send(`Product info at ${id} updated successfully`);
    return;
  } catch (error) {
    next(error);
  }
};
