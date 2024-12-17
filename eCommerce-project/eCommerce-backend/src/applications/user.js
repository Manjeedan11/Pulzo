import NotFoundError from "../domain/errors/not-found-error.js";
import User from "../infrastructure/schemas/User.js";

export const getUser = async (req, res, next) => {
  try {
    const data = await User.find();
    return res.status(200).json(data).send();
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    await User.create(req.body);
    return res.status(201).send("User successfully created");
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError("User is not found");
    }
    return res.status(201).json(user).send();
  } catch (error) {
    next(error);
  }
};

export const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new NotFoundError("User is not found");
    }
    return res.status(201).send(`User info with ${id} is removed`);
  } catch (error) {
    next(error);
  }
};

export const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      throw new NotFoundError("User is not found");
    }
    return res.status(201).send(`User info with ${id} is updated`);
  } catch (error) {
    next(error);
  }
};
