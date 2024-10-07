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
    },

    ratings: {
      type: [
        {
          date: {
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

module.exports = mongoose.model("Request", StudentSchema);