import { userProvider } from '../../../../db/providers';
import { errorHandler } from '../../../utils';

export default async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userProvider.getById(userId);

    return res.status(200).json({
      ...user.toObject(),
    });
  } catch (error) {
    return errorHandler(res, error);
  }
};
