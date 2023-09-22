const Appointment = require("../../model/Appoinment");
const defaults = require("../../config/defaults");

const count = async ({
  search = defaults.search,
}) => {
  let filterSearch = { name: { $regex: search, $options: 'i' } };

  return Appointment.count(filterSearch)
};

module.exports = count;