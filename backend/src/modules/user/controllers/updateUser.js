import User from '../../../../db/models/user';
import { userProvider } from '../../../../db/providers';
import { errorHandler, omitUndefined, hashPassword } from '../../../utils';

export default async (req, res) => {
  try {
    const { userId } = req.params;
    const { email, newEmail, currentPassword, newPassword, firstName, lastName } = req.body;
    const { userId: decodedUserId } = req.user;

    if (decodedUserId !== userId) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    const currentUser = await User.findOne({ email: email.toLowerCase() });

    let user;

    if (!newEmail && !newPassword) {
      user = await userProvider.updateById(
        userId,
        omitUndefined({
          firstName,
          lastName,
        })
      );
    }

    if (currentPassword) {
      const isPasswordValid = await currentUser.checkPassword(currentPassword);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Current password is invalid.' });
      }

      if (newEmail) {
        user = await userProvider.updateById(userId, { email: newEmail });
      }

      if (currentPassword) {
        const newHashedPassword = await hashPassword(newPassword);
        user = await userProvider.updateById(userId, { password: newHashedPassword });
      }
    }

    return res.status(200).json({ ...user.toObject() });
  } catch (error) {
    return errorHandler(res, error);
  }
};
