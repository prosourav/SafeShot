const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: true
    },
    paitent: String,
    status: {
      type: String,
      enum: ['pending', 'complete'],
      default: 'pending',
    },
    date: Date,
    vaccine: {
      type: String,
      enum: ['Pnemonia', 'Viral', 'Covid'],
      required: true
    },
  },
  { timestamps: true, id: true }
);

const Appointment = model('Appointment', appointmentSchema);
module.exports = Appointment;