const { badRequest } = require('../../utils/error');
const { hashMatched } = require('../../utils/hashing');
const { generateToken } = require('../token');
const { findUserByEmail } = require('../user');

const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw badRequest('Invalid Credentials');
  }

  const matched = await hashMatched(password, user.password);
  if (!matched) {
    throw badRequest('Invalid Credentials');
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return generateToken({ payload });
};

module.exports = {
  login
};