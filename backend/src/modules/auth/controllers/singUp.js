const User = require('../../../../db/models/user');
const { userProvider } = require('../../../../db/providers');

// const sendEmail = require('../../backgroundTasks/notifications/email');
const { validateEmail } = require('../../../helpers');
const { errorHandler, generateAccessTokens } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address.' });
    }

    const existedUser = await userProvider.getByEmail(email);

    if (existedUser) {
      return res.status(400).json({ message: 'User is already registered.' });
    }

    const user = await User.create({
      email: email.toLowerCase(),
      password,
    });

    // TODO: add verification email logic
    // try {
    //   await sendEmail({
    //     type: 'signup',
    //     to: email,
    //     variables: {},
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    const { token, refreshToken } = generateAccessTokens(user._id);

    return res.status(201).json({
      user,
      token,
      refreshToken,
    });
  } catch (error) {
    return errorHandler(res, error);
  }
};
