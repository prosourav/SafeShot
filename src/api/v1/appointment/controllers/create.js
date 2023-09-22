const appointmentService = require('../../../../lib/appointment');

const create = async (req, res, next) => {
  const { vaccine, date } = req.body;

  try {

    let appointment = await appointmentService.create({
      vaccine,
      date,
      user: req.user,
    });

    delete appointment._id;

    const response = {
      code: 201,
      message: 'Appointment Created Successfully',
      data: { ...appointment },
      links: {
        self: `/appointments`,
        reviews: `/reviews/${appointment.vaccine}`
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = create;