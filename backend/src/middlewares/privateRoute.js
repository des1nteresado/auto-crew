const { USER_ROLES } = require('../constants');

const privateRoute = (roles = []) => {
  return (req, res, next) => {
    const { userRole, userId: decodedUserId } = req.decodedUser;

    if (roles.includes(userRole)) {
      if (userRole === USER_ROLES.USER) {
        const { userId } = req.params;

        if (decodedUserId !== userId) {
          return res.status(403).json({ message: 'Forbidden' });
        }
      }
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  };
};

module.exports = privateRoute;
