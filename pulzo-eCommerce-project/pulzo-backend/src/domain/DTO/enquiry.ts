import { z } from "zod";

const phoneRegex = new RegExp(/^\+[1-9]\d{1,14}$/);

export const EnquiryDTO = z.object({
  name: z.string(),
  productName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  issueDetails: z.string(),
});
