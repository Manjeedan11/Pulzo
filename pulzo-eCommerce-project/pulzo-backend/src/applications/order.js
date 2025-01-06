import NotFoundError from "../domain/errors/not-found-error.js";
import Order from "../infrastructure/schemas/Order.js";

const getOrder = async (req, res, next) => {
  try {
    const data = await Order.find();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const createOrder = async (req, res, next) => {
  try {
    const data = await Order.create(req.body);
    return res.status(201).send("Orders added successfully");
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Order.findById(id);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    return res.status(200).json(data).send();
  } catch (error) {
    next(error);
  }
};

const deleteOrderById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Order.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    return res
      .status(200)
      .send(`Order ID : ${id} associated data is successfully deleted`);
  } catch (error) {
    next(error);
  }
};

const updateCategoryById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Order.findByIdAndDelete(req.body, id);
    if (!data) {
      throw new NotFoundError(`Order ID : ${id} associated data is not found`);
    }
    return res
      .status(200)
      .send(`Order ID : ${id} associated data is successfully deleted`);
  } catch (error) {
    next(error);
  }
};
