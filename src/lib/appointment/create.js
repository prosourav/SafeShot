const Appointment = require("../../model/Appoinment");

const create = async ({
 vaccine, date, user
}) => {

  if (!vaccine || !date || !user) {
    const error = new Error('Invalid parameters');
    error.status = 400;
    throw error;
  }
  

  const appointment = new Appointment({
    status:'pending',
    date: date,
    vaccine: vaccine,
    user: user._id,
    name: user.name
  });

  await appointment.save();
  return {
    id: appointment.id,
    ...appointment._doc,
  };
};

module.exports = create;