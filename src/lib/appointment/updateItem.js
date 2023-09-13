const Appointment = require("../../model/Appoinment");

const updateItem = async (id, { vaccine, time }) => {
  const appointment = await Appointment.findById(id);
  if (!appointment) {
    throw notFound();
  }

  const payload = { vaccine, time };

  Object.keys(payload).forEach((key) => {
    appointment[key] = payload[key] ?? appointment[key];
  });

  await appointment.save();
  return { id: appointment.id, ...appointment._doc   };
};

module.exports = updateItem;