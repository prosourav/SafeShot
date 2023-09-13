const User = require('../../model/User');

const createUser = async ({ name, email, password }) => {
  const user = new User({ name, email, password });
  await user.save();
  
  return { ...user._doc, id: user.id };
};

module.exports = {
  createUser,
};