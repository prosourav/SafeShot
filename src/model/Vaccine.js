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
      type: string,
    }
   
  },
  { timestamps: true, id: true }
);

const Vaccine = model('User', vaccineSchema);
module.exports = Vaccine;