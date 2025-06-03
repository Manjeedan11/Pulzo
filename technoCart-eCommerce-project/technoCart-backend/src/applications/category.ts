import { CategoryDTO } from "../domain/DTO/categories";
import NotFoundError from "../domain/errors/not-found-error";
import ValidationError from "../domain/errors/validation-error";
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
    res.status(200).json(data);
    return;
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
    const result = CategoryDTO.safeParse(req.body);
    if (!result.success) {
      throw new ValidationError("Invalid category data field");
    }
    await Category.create(result.data);
    res.status(201).send("Category added successfully");
    return;
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
    res.status(200).json(data).send();
    return;
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
    res
      .status(200)
      .send(`Category field data at ${id} id removed successfully`);
    return;
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
    const result = CategoryDTO.safeParse(req.body);
    if (!result.success) {
      throw new ValidationError("Invalid category data field");
    }
    const data = await Category.findByIdAndUpdate(id, result.data);
    if (!data) {
      throw new NotFoundError("Category is not found");
    }
    res
      .status(200)
      .send(`Category field data at ${id} id is updated successfully`);
    return;
  } catch (error) {
    next(error);
  }
};
