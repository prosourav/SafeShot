const Appointment = require("../../model/Appoinment");

const deleteItem = async (id) => {
  const appointemnt = await Appointment.findById(id);
  if (!appointemnt) {
    throw notFound();
  }

  // TODO:
  // Asynchronously Delete all associated comments

  return Appointment.findByIdAndDelete(id);
};

module.exports = deleteItem;