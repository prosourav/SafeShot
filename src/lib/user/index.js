const  createUser = require('./createUser');
const  userExist  = require('./userExist');
const  findUserByEmail  = require('./findUserByEmail');
const  getProfile  = require('./getProfile');
const  updateProfile  = require('./updateProfile');

module.exports = {
  createUser,
  userExist,
  findUserByEmail,
  getProfile,
  updateProfile
};