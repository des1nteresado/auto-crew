const { isValidObjectId } = require('mongoose');
const { userProvider } = require('../../../../db/providers');
const { errorHandler } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    if (isValidObjectId(userId)) {
      const deletedUser = await userProvider.deleteById(userId);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User does not exist.' });
      }

      return res.status(200).json(deletedUser);
    }
    return res.status(400).json({ message: 'Provided userId is no valid.' });
  } catch (error) {
    return errorHandler(res, error);
  }
};
