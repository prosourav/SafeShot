const notFoundError = ( _req, _res, next) => {
  const error = new Error('Requested Resource not found');
  error.code = 404;
  error.error = 'Not Found!';
  next(error);
};

module.exports = notFoundError;