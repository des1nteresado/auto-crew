import userModel from '../models/user';

export const getUser = async (options) => userModel.findOne(options);

export const getById = async (id, projection) => userModel.findById(id, projection);

export const getAll = () => userModel.find();

export const getByEmail = async (email) => {
  const lowerCaseEmail = email.toLowerCase();
  return userModel.findOne({ email: lowerCaseEmail });
};

export const getByRole = (role) => {
  return userModel.find({ role });
};

export const deleteById = async (id) => userModel.findByIdAndDelete(id);

export const updateById = (id, fields) => userModel.findByIdAndUpdate(id, fields, { new: true });
