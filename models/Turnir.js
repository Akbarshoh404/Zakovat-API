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
        },
      ],
    },
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Turnir", TurnirSchema);