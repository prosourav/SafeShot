const User = require('../../model/User');

const createUser = async ({ name, email, password }) => {
  console.log('here........');
  const user = new User({ name, email, password });
  await user.save();

  console.log('here........',user);
  
  return { ...user._doc, id: user.id };
};

module.exports = {
  createUser,
};