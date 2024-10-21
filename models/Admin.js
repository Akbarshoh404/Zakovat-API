const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    login: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha aming gandon
);

module.exports = mongoose.model("Admin", AdminSchema);
