const { findUserByEmail } = require("./findUserByEmail");


const userExist = async (email) => {
  const user = await findUserByEmail(email);
  return user ? true : false;
};

module.exports = {
  userExist
};