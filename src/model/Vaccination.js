const { Schema, model } = require('mongoose');

const vaccinationSchema = new Schema(
  {
    appointmentId: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    userId: {
       type: Schema.ObjectId,
        ref: 'User' 
      },
    vaccine: {
      type: Schema.ObjectId,
      ref: 'Vaccine'
    },
  },
  { timestamps: true, id: true }
);

const Vaccination = model('Vaccination', vaccinationSchema);
module.exports = Vaccination;