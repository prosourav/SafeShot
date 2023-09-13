const findAllItems = require('../../../lib/availability');

const getAvailability = async (req, res, next) => {
  try {

    const availableDates = findAllItems();
    const response = {
      code: 200,
      message: 'Available dates fetched successfully',
      data: availableDates,
      links: {
        self: req.url,
        appointment: '/appointments'
      },
    };
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAvailability };