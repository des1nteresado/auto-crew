// import jwt from 'jsonwebtoken';
import User from '../../../../db/models/user';

// import config from '../../../config';

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    // const { TOKEN_SECRET, TOKEN_OPTIONS, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_OPTIONS } = config;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ errors: 'User does not exist.' });
    }

    const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ errors: 'Username or password is invalid.' });
    }

    // const token = jwt.sign({ userId: user._id, email: user.email }, TOKEN_SECRET, TOKEN_OPTIONS);

    // const refreshToken = jwt.sign(
    //   { userId: user._id },
    //   REFRESH_TOKEN_SECRET,
    //   REFRESH_TOKEN_OPTIONS
    // );

    return res.status(200).json({
      user,
      // token,
      // refreshToken,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};
