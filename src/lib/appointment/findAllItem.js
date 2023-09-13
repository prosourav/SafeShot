const Appointment = require("../../model/Appoinment");
const defaults = require("../../config/defaults");

const findAllItem = async ({
  filter,
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
}) => {

  let filterSearch = {};
  const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortBy}`;

  (!Object.keys(filter).length) ?
    filterSearch = { name: { $regex: search, $options: 'i' } } :
    filterSearch = { $and: [filter, { name: { $regex: search, $options: 'i' } }] }

  const appoinments = await Appointment.find(filterSearch)
    .populate({ path: 'user', select: 'name email', })
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit)


  return appoinments.map((appoinment) => ({
    ...appoinment._doc,
    id: appoinments.id,
  }));
};

module.exports = findAllItem;