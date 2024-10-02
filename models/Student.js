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

    // ratings: {
    //   type: [
    //     {
    //       teacher_id: {
    //         type: String,
    //       },

    //       rating: {
    //         type: Number,
    //       },

    //       comment: {
    //         type: String,
    //       },

    //       tag: {
    //         type: String,
    //       },
    //     },
    //   ],
    // },
  },
  {
    timestamps: true,
  } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Request", StudentSchema);
