import { Request } from "express";
export {};

declare global {
  namespace Express {
    interface Request {
      auth: {
        userId: string;
        sessionClaims?: CustomJwtSessionClaims; // Add this line
      };
    }
  }

  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role;
    };
  }

  type Role = "admin";
}
