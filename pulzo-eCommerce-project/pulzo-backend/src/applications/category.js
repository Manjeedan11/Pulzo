import NotFoundError from "../domain/errors/not-found-error.js";
import Category from "../infrastructure/schemas/Category.js";

const categories = [
  { id: "1", name: "Headphones" },
  { id: "2", name: "Earbuds" },
  { id: "3", name: "Speakers" },
  { id: "4", name: "Mobile Phones" },
  { id: "5", name: "Smart watches" },
];

export const getCategories = async (req, res, next) => {
  try {
    const data = await Category.find();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    await Category.create(req.body);
    return res.status(201).send("Category added successfully");
  } catch (error) {
    next(error);
  }
};

export const getCategoriesById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (!category) {
      throw new NotFoundError("Category not found");
    }
    return res.status(200).json(category).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategoriesById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      throw new NotFoundError("Category is not found");
    }
    return res
      .status(200)
      .send(`Category field data at ${id} id removed successfully`);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const category = await Category.findByIdAndUpdate(id, req.body);
    if (!category) {
      throw new NotFoundError("Category is not found");
    }
    return res
      .status(200)
      .send(`Category field data at ${id} id is updated successfully`);
  } catch (error) {
    next(error);
  }
};
