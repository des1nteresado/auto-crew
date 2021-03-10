import User from '../../../../db/models/user';
import { userProvider } from '../../../../db/providers';

// import jwt from 'jsonwebtoken';
// import sendEmail from '../../backgroundTasks/notifications/email';
import { validateEmail } from '../../../helpers';

// import config from '../../../config';
// import USER_ROLES from '../../../constants/userRoles';

export default async (req, res) => {
  try {
    const { email, password } = req.body;
    // const { TOKEN_SECRET, TOKEN_OPTIONS, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_OPTIONS } = config;

    if (!validateEmail(email)) {
      return res.status(400).json({ errors: 'Invalid email address.' });
    }

    const existedUser = await userProvider.getByEmail(email);

    if (existedUser) {
      return res.status(400).json({ errors: 'User is already registered.' });
    }

    const user = await User.create({
      email: email.toLowerCase(),
      password,
    });

    // try {
    //   await sendEmail({
    //     type: 'signup',
    //     to: email,
    //     variables: {},
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    // const token = jwt.sign({ userId: user._id, userRole: user.role }, TOKEN_SECRET, TOKEN_OPTIONS);

    // const refreshToken = jwt.sign(
    //   { userId: user._id },
    //   REFRESH_TOKEN_SECRET,
    //   REFRESH_TOKEN_OPTIONS
    // );

    return res.status(201).json({
      user,
      // token,
      // refreshToken
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
