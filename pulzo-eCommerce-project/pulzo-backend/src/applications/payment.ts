import { NextFunction, Request, Response } from "express";
import Order from "../infrastructure/schemas/Order";

export const handleWebhook = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  if (type === "payment_intent.succeeded") {
    const paymentIntent = data.object;
    const orderId = paymentIntent.metadata.orderId;

    await Order.findByIdAndUpdate(orderId, {
      paymentStatus: "PAID",
    });
  }

  res.status(200).send();
};
