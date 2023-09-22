const userService = require('../../../../lib/user');
const defaults = require('../../../../config/defaults');
const { query } = require('../../../../utils');



const findAllItem = async (req, res, next) => {

  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sortType;
  const sortBy = req.query.sort_by || defaults.sortBy;
  const search = req.query.search || defaults.search;

  try {

    // data
    const users = await userService.findAllItem({
      page,
      limit,
      sortType,
      sortBy,
      search
    });
    console.log("users", users);
    const data = query.getTransformedItems({
      items: users,
      path: '/users',
      selection: ['_id', 'name', 'vaccine', 'link', 'date', 'createdAt', 'photo', 'vaccines', 'role', 'email'],
    });

    // pagination
    const totalItems = await userService.count({ search });
    const pagination = query.getPagination({ totalItems, limit, page });

    // // HATEOAS Links
    const links = query.getHATEOASForAllItems({
      url: req.url,
      path: req.path,
      query: req.query,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
      page,
    });

    res.status(200).json({
      code: 200,
      message: 'users fetched successfully',
      data,
      pagination,
      links,
    });
  } catch (e) {
    next(e);
  }
};


module.exports = findAllItem;