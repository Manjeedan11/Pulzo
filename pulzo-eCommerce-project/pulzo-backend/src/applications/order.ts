import NotFoundError from "../domain/errors/not-found-error";
import Order from "../infrastructure/schemas/Order";
import { Request, Response, NextFunction } from "express";

const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Order.find();
    res.status(200).json(data);
    return;
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Order.create(req.body);
    res.status(201).send("Order added successfully");
    return;
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Order.findById(id);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    res.status(200).json(data).send();
    return;
  } catch (error) {
    next(error);
  }
};

const deleteOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Order.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    res
      .status(200)
      .send(`Order ID : ${id} associated data is successfully deleted`);
    return;
  } catch (error) {
    next(error);
  }
};

const updateCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Order.findByIdAndDelete(id, req.body);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    res
      .status(200)
      .send(`Order ID : ${id} associated data is successfully deleted`);
    return;
  } catch (error) {
    next(error);
  }
};
