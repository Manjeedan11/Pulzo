import { z } from "zod";

const ObjectIdRegex = /^[a-fA-F0-9]{24}$/;

export const ProductDTO = z.object({
  categoryId: z.string().regex(ObjectIdRegex, {
    message: "Invalid ObjectId format for categoryId",
  }),
  image: z.string(),
  name: z.string(),
  price: z.string(),
  synopsis: z.string(),
  description: z.string(),
  ratings: z.number().min(1).max(5),
  keyFeatures: z.array(z.string()),
  stock: z.number().min(0).default(0),
  sold: z.number().min(0).default(0),
});
