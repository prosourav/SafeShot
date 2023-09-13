const { authorizationError } = require('../../utils/error');
const appointmentService = require('../../lib/appointment');

const hasPermission =
  (model = '') =>
    async (req, _res, next) => {
      if (model === 'Appointment') {
        const isOwner = await appointmentService.checkOwnership({
          resourceId: req.params.id,
          userId: req.user.id,
        });
        if (isOwner || req.user.role === 'doctor' || req.user.role === 'admin') {
          return next();
        }
        return next(authorizationError());
      }
    };

module.exports = hasPermission;