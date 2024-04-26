const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const admissionDocument = new Schema({
  admissionDate: {
    type: Date,
    default: new Date(),
    required: [true, "admission date is needed"],
  },

  dischargeDate: {
    type: Date,
    default: new Date(),
    required: [true, "discharge date is needed"],
  },

  diagnosis: {
    type: String,
    required: [true, "diagnosis is required"],
  },

  active: {
    type: Boolean,
    default: true,
  },
});

const Admission = mongoose.model("Admission", admissionDocument);
module.exports = Admission;
