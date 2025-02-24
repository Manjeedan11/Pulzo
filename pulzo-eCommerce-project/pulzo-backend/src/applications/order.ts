import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import ValidationError from "../domain/errors/validation-error";
import Order from "../infrastructure/schemas/Order";
import { getAuth } from "@clerk/express";
import NotFoundError from "../domain/errors/not-found-error";
import Address from "../infrastructure/schemas/Address";
import { CreateOrderDTO } from "../domain/DTO/order";
import Product from "../infrastructure/schemas/Product";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = CreateOrderDTO.safeParse(req.body);

    if (!result.success) {
      console.log("Validation errors:", result.error.issues);
      throw new ValidationError("Invalid order data");
    }

    const userId = req.auth.userId;

    const totalPrice = result.data.items.reduce((sum, item) => {
      const price = parseFloat(item.product.price);
      const quantity = parseInt(item.quantity);
      return sum + price * quantity;
    }, 0);

    const address = await Address.create(result.data.shippingAddress);
    const order = await Order.create({
      userId,
      addressId: address._id.toString(),
      items: result.data.items.map((item) => ({
        product: item.product._id,
        quantity: parseInt(item.quantity),
      })),
      totalPrice: totalPrice,
      orderStatus: "CONFIRMED",
      paymentStatus: "PAID",
    });

    // Update each product's stock and sold
    for (const item of order.items) {
      await Product.findByIdAndUpdate(
        item.product,
        {
          $inc: {
            stock: -item.quantity,
            sold: item.quantity,
          },
        },
        { new: true }
      );
    }

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const order = await Order.findById(id)
      .populate({
        path: "addressId",
        model: "Address",
      })
      .populate({
        path: "items.",
      });
    if (!order) {
      throw new NotFoundError("Order not found");
    }
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrdersByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.auth.userId;
    const orders = await Order.find({ userId })
      .populate({
        path: "addressId",
        model: "Address",
      })
      .populate({
        path: "items.product",
        model: "Product",
      });

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
