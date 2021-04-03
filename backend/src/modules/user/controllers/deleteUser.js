const { userProvider } = require('../../../../db/providers');
const { errorHandler } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedUser = await userProvider.deleteById(userId);

    return res.status(200).json(deletedUser);
  } catch (error) {
    return errorHandler(res, error);
  }
};
