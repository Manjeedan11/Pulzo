import NotFoundError from "../domain/errors/not-found-error";
import Category from "../infrastructure/schemas/Category";
import { Request, Response, NextFunction } from "express";

const categories = [
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Speakers" },
  { id: "4", name: "Mobile Phones" },
  { id: "5", name: "Smart watches" },
];

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Category.find();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Category.create(req.body);
    return res.status(201).send("Category added successfully");
  } catch (error) {
    next(error);
  }
};

export const getCategoriesById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Category.findById(id);
    if (!data) {
      throw new NotFoundError("Category not found");
    }
    return res.status(200).json(data).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategoriesById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Category.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError("Category is not found");
    }
    return res
      .status(200)
      .send(`Category field data at ${id} id removed successfully`);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Category.findByIdAndUpdate(id, req.body);
    if (!data) {
      throw new NotFoundError("Category is not found");
    }
    return res
      .status(200)
      .send(`Category field data at ${id} id is updated successfully`);
  } catch (error) {
    next(error);
  }
};
