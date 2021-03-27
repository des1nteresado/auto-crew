const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
};

module.exports = verifyToken;
