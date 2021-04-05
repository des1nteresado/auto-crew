const { DEFAULT_PAGINATION_VALUES } = require('../constants');

const paginationMiddleware = (req, res, next) => {
  const { DEFAULT_PAGE_SIZE, DEFAULT_START_PAGE } = DEFAULT_PAGINATION_VALUES;

  const { page = 0, limit = 0 } = req.query;
  const pageNumber = page > 0 ? +page : DEFAULT_START_PAGE;
  const pageLimit = limit > 0 ? +limit : DEFAULT_PAGE_SIZE;
  const startIndex = (pageNumber - 1) * pageLimit;

  req.pageConfig = { pageLimit, pageNumber, startIndex };
  next();
};

module.exports = paginationMiddleware;
