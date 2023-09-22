const reviewService = require('../../../../lib/review');
const defaults = require('../../../../config/defaults');
const { query } = require('../../../../utils');



const findAllItems = async (req, res, next) => {

  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sortType;
  const sortBy = req.query.sort_by || defaults.sortBy;
  const status = req.query.status || defaults.reviewFilter;
  const expands = req.query.expand ?? defaults.expand;
  const { filter: perMissionFilter } = req;
  try {
   

    // data
    const reviews = await reviewService.findAllItem({
      page,
      limit,
      sortType,
      sortBy,
      status,
      expands,
      perMissionFilter
    });
    console.log(reviews);
    const data = query.getTransformedItems({
      items: reviews,
      path: '/reviews',
      selection: ['_id', 'body', 'status', 'link', 'user','appointmentId', 'createdAt'],
    });

    // pagination
    const totalItems = await reviewService.count({ perMissionFilter, status });
    const pagination = query.getPagination({ totalItems, limit, page });

    // HATEOAS Links
    const links = query.getHATEOASForAllItems({
      url: req.url,
      path: req.path,
      query: req.query,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
      page,
    });
    
    for( let item of data ) {
      console.log(item);
      item.vaccine = item.appointmentId.vaccine;
      item.author = item.user.name;
      delete item.user;
      delete item.appointmentId
    };


    res.status(200).json({
      code: 200,
      message: 'Reviews fetched successfully',
      data,
      pagination,
      links,
    });
  } catch (e) {
    next(e);
  }
};


module.exports = findAllItems;