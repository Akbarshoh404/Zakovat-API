const mongoose = require("mongoose");

const TurnirSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    teams: {
      type: [
        {
          id: {
            type: String,
          },

          trueAnswers: {
            type: Number,
          },

          falseAnswers: {
            type: String,
          },

          penalty: {
            type: String,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Turnir", TurnirSchema);
