const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

const errorHandler = (res, error) => {
  console.log(error);

  return res.status(500).json({ message: error.message || error });
};

const generateAccessTokens = (userId, userRole) => {
  const token = jwt.sign({ userId, userRole }, process.env.TOKEN_SECRET, {
    expiresIn: '8760h',
  });

  const refreshToken = jwt.sign({ userId }, process.env.TOKEN_SECRET, {
    expiresIn: '7d',
  });

  return {
    token,
    refreshToken,
  };
};

const omitUndefined = (object) => _.omitBy(object, _.isNil);

module.exports = {
  hashPassword,
  errorHandler,
  generateAccessTokens,
  omitUndefined,
};
