const User = require('../../model/User');
const { badRequest } = require('../../utils/error');

const changeAdmin = async ({ id, currentAdminId }) => {
  const newAdmin = await User.findById(id);
  const prevAdmin = await User.findById(currentAdminId);
  if (!newAdmin) { throw badRequest() };
  newAdmin.role = 'admin';
  prevAdmin.role = 'user';

  await newAdmin.save();
  await prevAdmin.save();
  return { ...newAdmin };
};

module.exports = changeAdmin;