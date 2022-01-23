const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      default: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
