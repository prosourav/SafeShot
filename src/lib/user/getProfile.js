const User = require("../../model/User");
const { notFound, badRequest } = require("../../utils/error");

const getProfile = async ({ id }) => {
  console.log('hello',id);
  if (!id) { throw badRequest() };
  const user = await User.findById(id);
  if (!user) { throw notFound() };
  return { id: user._id, ...user._doc, };
};
module.exports = getProfile;