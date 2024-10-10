require("dotenv").config(); //env format uchun

const StudentRouter = require("./routes/Student");
const AdminRouter = require("./routes/Admin");
const TeamRouter = require("./routes/Team")
const TurnirRouter = require("./routes/Turnir")

const express = require("express"); //express
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express(); //express () bilan qo'yilishi kere
app.use(cors());

app.use(express.json()); //app.use bu middleware ishlatish uchun severga dopolneniya qoyish uchun json() json format uchun
app.use("/participants", StudentRouter);
app.use("/admin", AdminRouter);
app.use("/teams", TeamRouter);
app.use("/turnirs", TurnirRouter);

const PORT = process.env.PORT || 8000; //env port uchun

function start() {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
