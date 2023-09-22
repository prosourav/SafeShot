const User = require("../../model/User");
const defaults = require("../../config/defaults");

const findAllItem = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
}) => {

  let filterSearch = { name: { $regex: search, $options: 'i' } };
  const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortBy}`;

  const appoinments = await User.find(filterSearch)
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit)


  return appoinments.map((User) => ({
    ...User._doc,
    id: appoinments.id,
  }));
};

module.exports = findAllItem;