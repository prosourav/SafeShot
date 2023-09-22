const { Schema, model } = require('mongoose');

const vaccineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      unique: true,
      required: true,
    },
    expiry: {
      type: String,
      required: true,
    }
  },
  { timestamps: true, id: true }
);

const Vaccine = model('Vaccine', vaccineSchema);
module.exports = Vaccine;