// src/types/custom.d.ts (or wherever you store your custom types)
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      auth: {
        userId: string; // Adjust this type according to the Clerk response (could be string or another type)
      };
    }
  }
}
