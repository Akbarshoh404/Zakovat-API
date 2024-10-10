const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Team", TeamSchema);
