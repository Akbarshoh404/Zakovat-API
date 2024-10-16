const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    grade: {
      type: Number,
      required: true,
    },

    participants: {
      type: [
        {
          id: {
            type: String,
          },
        },
      ],
    },

    trueAnswers: {
      type: Number,
    },

    falseAnswers: {
      type: Number
    },

    penalty: {
      type: Number
    },

    score: {
      type: Number
    }
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Team", TeamSchema);
