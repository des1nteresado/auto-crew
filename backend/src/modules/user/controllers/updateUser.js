const { isValidObjectId } = require('mongoose');
const User = require('../../../../db/models/user');
const { userProvider } = require('../../../../db/providers');
const { errorHandler, omitUndefined, hashPassword } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    if (isValidObjectId(userId)) {
      const { newEmail, currentPassword, newPassword, firstName, lastName } = req.body;

      const currentUser = await User.findOne({ _id: userId });

      if (!currentUser) {
        return res.status(404).json({ message: 'User does not exist.' });
      }

      const user = { firstName, lastName, email: newEmail };

      if (currentPassword && newPassword) {
        const isPasswordValid = await currentUser.checkPassword(currentPassword);

        if (!isPasswordValid) {
          return res.status(400).json({ message: 'Current password is invalid.' });
        }

        const newHashedPassword = await hashPassword(newPassword);
        user.password = newHashedPassword;
      }

      const updatedUser = await userProvider.updateById(
        userId,
        omitUndefined({
          ...user,
        })
      );

      return res.status(200).json(updatedUser);
    }
    return res.status(400).json({ message: 'Provided userId is no valid.' });
  } catch (error) {
    return errorHandler(res, error);
  }
};
