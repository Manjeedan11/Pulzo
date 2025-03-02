import NotFoundError from "../domain/errors/not-found-error";
import { Request, Response, NextFunction } from "express";
import Enquiry from "../infrastructure/schemas/Enquiry";
import { EnquiryDTO } from "../domain/DTO/enquiry";
import ValidationError from "../domain/errors/validation-error";

export const getEnquires = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Enquiry.find();
    res.status(200).json(data);
    return;
  } catch (error) {
    next(error);
  }
};

export const createEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = EnquiryDTO.safeParse(req.body);
    if (!result.success) {
      throw new ValidationError("Enquiry fields is not found");
    }
    await Enquiry.create(result.data);
    res.status(201).send({ message: "Enquiry added successfully" });
    return;
  } catch (error) {
    next(error);
  }
};

export const getEnquiryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Enquiry.findById(id);
    if (!data) {
      throw new NotFoundError("Enquiry not found");
    }
    res.status(200).json(data).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteEnquiryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Enquiry.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError("Enquiry not found");
    }
    res.status(200).send(`Enquiry info at ${id} is successfully deleted`);
    return;
  } catch (error) {
    next(error);
  }
};

export const updateEnquiryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await Enquiry.findByIdAndUpdate(id, req.body);
    if (!data) {
      throw new NotFoundError("Enquiry not found");
    }
    res.status(200).send(`Enquiry info at ${id} is successfully updated`);
    return;
  } catch (error) {
    next(error);
  }
};
