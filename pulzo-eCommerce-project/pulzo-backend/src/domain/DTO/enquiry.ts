import { z } from "zod";

export const EnquiryDTO = z.object({
  name: z.string(),
  productName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  issueDetails: z.string(),
});
