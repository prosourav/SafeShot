const Review = require("../../model/Review");
const { notFound } = require("../../utils/error");

const checkOwnership = async ({ resourceId, userId }) => {
  const review = await Review.findById(resourceId);
  if (!review) { throw notFound(); }

  if (review._doc.user.toString() === userId.toString()) {
    return true;
  }
  return false;
};

module.exports = checkOwnership;