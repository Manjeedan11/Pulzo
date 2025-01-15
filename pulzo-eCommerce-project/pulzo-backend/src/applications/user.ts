import NotFoundError from "../domain/errors/not-found-error";
import User from "../infrastructure/schemas/User";
import { Request, Response, NextFunction } from "express";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.find();
    res.status(200).json(data).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await User.create(req.body);
    res.status(201).send("User successfully created");
    return;
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await User.findById(id);
    if (!data) {
      throw new NotFoundError("User not found");
    }
    res.status(200).json(data).send();
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    if (!data) {
      throw new NotFoundError("User not found");
    }
    res.status(200).send(`User info of id ${id} is removed`);
    return;
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndUpdate(id, req.body);
    if (!data) {
      throw new NotFoundError("User not found");
    }
    res.status(200).send(`User info of ${id} is updated`);
    return;
  } catch (error) {
    next(error);
  }
};
