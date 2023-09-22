const Review = require("../../model/Review");

const updateItem = async (id, { body, status }) => {
  const review = await Review.findById(id);
  if (!review) {
    throw notFound();
  }

  const payload = { body, status };

  if (status) {
    payload.status = status;
  }

  Object.keys(payload).forEach((key) => {
    review[key] = payload[key] ?? review[key];
  });

  await review.save();
  return { id: review.id, ...review._doc };
};

module.exports = updateItem;