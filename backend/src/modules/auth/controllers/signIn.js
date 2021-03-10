import User from '../../../../db/models/user';
import { errorHandler, generateAccessTokens } from '../../../utils';

export default async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist.' });
    }

    const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Username or password is invalid.' });
    }

    const { token, refreshToken } = generateAccessTokens(user._id);

    return res.status(200).json({
      user,
      token,
      refreshToken,
    });
  } catch (error) {
    return errorHandler(res, error);
  }
};
