import jwt from 'jsonwebtoken';

export const errorHandler = (res, error) => {
  console.log(error);

  return res.status(500).json({ message: error.message || error });
};

export const generateAccessTokens = (userId) => {
  const token = jwt.sign({ userId }, process.env.TOKEN_SECRET, {
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
