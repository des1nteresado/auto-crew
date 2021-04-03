const userModel = require('../models/user');

const getUser = async (options) => userModel.findOne(options);

const getById = async (id, projection) => userModel.findById(id, projection);

const getAll = () => userModel.find();

const getByEmail = async (email) => {
  const lowerCaseEmail = email.toLowerCase();
  return userModel.findOne({ email: lowerCaseEmail });
};

const getByRole = (role) => {
  return userModel.find({ role });
};

const deleteById = async (id) => userModel.findByIdAndDelete(id);

const updateById = (id, fields) => userModel.findByIdAndUpdate(id, fields, { new: true });

const getUsersCount = () => {
  return userModel.countDocuments({});
};
module.exports = {
  getUser,
  getById,
  getAll,
  getByEmail,
  getByRole,
  deleteById,
  updateById,
  getUsersCount,
};
