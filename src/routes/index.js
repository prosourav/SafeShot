const router = require('express').Router();
const { controllers: authController } = require('../api/v1/auth');
const { getAvailability } = require('../api/v1/availability');
const { controllers: appointmentController } = require('../api/v1/appointment');
const { controllers: userController } = require('../api/v1/user');
const { controllers: reviewController } = require('../api/v1/review');
const authenticate = require('../middleware/authenticate');
const setFilterByRole = require('../middleware/setFilterByRole');
const authorize = require('../middleware/authorize');
const ownership = require('../middleware/ownerShip');
const haspPermission = require('../middleware/hasPermission');



// Auth routes
router
  .post('/api/v1/auth/register', authController.register)
  .post('/api/v1/auth/login', authController.login);
// will do in next version
// .post('/api/v1/auth/reset-password', authController.resetPassword);

// not able implement according documentation 
router
  .get('/api/v1/availability', getAvailability);
//   .get(appointments.checkAvailability);

// fetch and post all appointments user can fetch his only, admin/doctors can fetch all
router
  .route('/api/v1/appointments')
  .get(authenticate, authorize(['user', 'admin', 'doctor']), setFilterByRole, appointmentController.findAllItem)
  .post(authenticate, authorize(['user', 'admin']), appointmentController.create)

  // details of appointment, update appointment and delete appointment 
router
  .route('/api/v1/appointments/:id')
  .get(authenticate, authorize(['user', 'admin', 'doctor']), haspPermission('Appointment'), appointmentController.findSingleItem)
  .patch(authenticate, authorize(['user', 'admin', 'doctor']), haspPermission('Appointment'), appointmentController.updateItem)
  .delete(authenticate, authorize(['user']), ownership('Appointment'), appointmentController.deleteItem);

  // get and update own-profile 
router
  .route('/api/v1/users/profile')
  .get(authenticate, userController.getProfile)
  .patch(authenticate, userController.updateProfile);

  // get or post review
router
  .route('/api/v1/reviews')
  .get(authenticate, authorize(['user', 'admin', 'doctor']), setFilterByRole, reviewController.findAllItem)
  .post(authenticate, authorize(['user']), reviewController.create)

// get detail of a review or update/delete a review
router
  .route('/api/v1/reviews/:id')
  .patch(authenticate, authorize(['user', 'admin']), haspPermission('Review'), reviewController.updateItem)
  .delete(authenticate, authorize(['user', 'admin']), haspPermission('Review'), reviewController.deleteItem);

//  fetch details of user (user own can fetch only himself-data)
router
  .route('/api/v1/users/:id')
  .get(authenticate, authorize(['admin', 'user', 'doctor']), haspPermission('User'), userController.findSingleItem)
  .patch(authenticate, authorize(['admin', 'doctor']), userController.updateItem)
  .delete(authenticate, authorize(['admin', 'doctor']), userController.deleteItem);

// get a list of users, and create a new user as a admin
router
  .route('/api/v1/users')
  .get(authenticate, authorize(['admin']), userController.findAllItem)
  .post(authenticate, authorize(['admin']), userController.create)

  // change admin
router
  .route('/api/v1/change_admin/:id')
  .patch(authenticate, authorize(['admin']), userController.changeAdmin);

router
  .get('/', (_req, res) => res.json({ message: 'Hello' }).status(200));


module.exports = router;