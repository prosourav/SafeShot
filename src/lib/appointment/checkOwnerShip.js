const Appointment = require("../../model/Appoinment");
const { notFound } = require("../../utils/error");

const checkOwnership = async ({ resourceId, userId }) => {
  const appointment = await Appointment.findById(resourceId);
  if (!appointment) { throw notFound(); }

  if (appointment._doc.user.toString() === userId.toString()) {
    return true;
  }
  return false;
};

module.exports = checkOwnership;