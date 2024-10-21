const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    surname: {
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
    }
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan amcha
);

module.exports = mongoose.model("Request", StudentSchema);