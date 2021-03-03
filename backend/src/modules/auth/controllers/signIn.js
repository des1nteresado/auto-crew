import jwt from 'jsonwebtoken';
// import sendEmail from '../../backgroundTasks/notifications/email';
// import { validateEmail } from '../../../utils';

// import { userProvider } from '../../../database/repositories/providers';
import config from '../../../config';
import USER_ROLES from '../../../constants/userRoles';

export default async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const { TOKEN_SECRET, TOKEN_OPTIONS, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_OPTIONS } = config;

    if (!validateEmail(email)) {
      return res.status(400).json({ errors: 'Invalid email address.' });
    }

    const existUser = await userProvider.getByEmail(email);

    if (existUser !== null) {
      return res.status(400).json({ errors: 'User is already registered.' });
    }

    const payload = {
      email,
      password,
      role: role || USER_ROLES.CUSTOMER,
      verification: {},
    };

    const user = await userProvider.signUp(payload);

    try {
      await sendEmail({
        type: 'signup',
        to: email,
        variables: {},
      });
    } catch (error) {
      console.log(error);
    }

    const token = jwt.sign({ userId: user._id, userRole: user.role }, TOKEN_SECRET, TOKEN_OPTIONS);

    const refreshToken = jwt.sign(
      { userId: user._id },
      REFRESH_TOKEN_SECRET,
      REFRESH_TOKEN_OPTIONS,
    );

    return res.status(200).json({ user, token, refreshToken });
  } catch (error) {
    res.status(400).json({ errors: error });
  }
};