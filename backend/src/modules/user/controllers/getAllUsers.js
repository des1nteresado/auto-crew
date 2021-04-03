const { userProvider } = require('../../../../db/providers');
const { errorHandler } = require('../../../utils');

module.exports = async (req, res) => {
  try {
    const { pageLimit, startIndex } = req.pageConfig;

    const users = await userProvider.getAll().limit(pageLimit).skip(startIndex).exec();
    const totalUsersCount = await userProvider.getUsersCount();

    return res.status(200).json({
      users,
      pageCount: Math.ceil(totalUsersCount / pageLimit),
    });
  } catch (error) {
    return errorHandler(res, error);
  }
};
