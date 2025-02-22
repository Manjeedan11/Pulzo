import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import ValidationError from "../domain/errors/validation-error";
import Order from "../infrastructure/schemas/Order";
import { getAuth } from "@clerk/express";
import NotFoundError from "../domain/errors/not-found-error";
