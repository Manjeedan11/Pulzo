import { z } from "zod";

export const CreateOrderDTO = z.object({
  items: z
    .object({
      product: z.object({
        _id: z.string(),
        name: z.string(),
        price: z.string(),
        image: z.string(),
        description: z.string(),
      }),
      quantity: z.string(),
    })
    .array(),
  shippingAddress: z.object({
    firstName: z.string(),
    lastName: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    phoneNumber: z.string(),
  }),
});
