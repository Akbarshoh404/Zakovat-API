const { Router } = require("express");
const router = Router();

const Admin = require("../models/Admin");

//get metodi

router.get("/", async (req, res) => {
  try {
    const todo = await Admin.find({});
    res.json(todo);
  } catch (error) {
    console.log({ error, messege: "Error!!!" });
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  let todo = await Admin.findOne({ name });
  if (todo) return res.send("You have this user!!!");

  todo = new Admin(req.body);  // Fixed this line
  await todo.save();

  res.send("User Added: OK");
});

// Delete

router.delete("/:_id", async (req, res) => {
  try {
    await Admin.findByIdAndDelete({ _id: req.params._id });
    res.send(`User with id: ${req.params._id} deleted: ok`);
  } catch (error) {
    console.log({
      error,
      message: "Error!!! Delete method did not work",
    });
  }
});

//Patch

router.patch("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const updTodo = req.body;

    const result = await Admin.findByIdAndUpdate(_id, updTodo);
    res.send(result);
  } catch (err) {
    console.log({
      err,
      message: "Error!!! Patch method did not work",
    });
  }
});

module.exports = router;
