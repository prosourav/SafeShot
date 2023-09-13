const appointmentService = require('../../../../lib/appointment');

const updateItem = async (req, res, next) => {
  const { id } = req.params;

  try {
    const appointment = await appointmentService.updateItem(id, req.body);
    delete appointment._id;
    const response = {
      code: 200,
      message: 'Appointment updated successfully',
      data: appointment,
      links: {
        self: `/appointments/${appointment.id}`,
      },
    };

    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = updateItem;