const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    vaccine: Schema.ObjectId,
    body: String,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },

  },
  { timestamps: true, id: true },
);

const Review = model('Review', reviewSchema);
module.exports = Review;