const { Router } = require("express");
const router = Router();

const Request = require("../models/Student");

//get metodi

router.get("/", async (req, res) => {
  try {
    const todo = await Request.find({});
    res.json(todo);
  } catch (error) {
    console.log({ error, messege: "Error!!!" });
  }
});

router.post("/", async (req, res) => {
  const { login } = req.body;

  let todo = await Request.findOne({ login });
  if (todo) return res.send("You have this user!!!");

  todo = new Request(req.body);
  await todo.save();

  res.send("User Added: OK");
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await Request.findById(_id);

    if (!user) return res.status(404).send("User not found!");

    res.json(user);
  } catch (error) {
    console.error({ error, message: "Error!!! Could not retrieve user" });
    res.status(500).send("Error retrieving user");
  }
});

// Delete

router.delete("/:_id", async (req, res) => {
  try {
    await Request.findByIdAndDelete({ _id: req.params._id });
    res.send(`User with id: ${req.params._id} deleted: ok`);
  } catch (error) {
    console.log({
      error,
      message: "Error!!! Delete method did not work",
    });
  }
});

//Patch bitch

router.patch("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const updTodo = req.body;

    const result = await Request.findByIdAndUpdate(_id, updTodo);
    res.send(result);
  } catch (err) {
    console.log({
      err,
      message: "Error!!! Patch method did not work",
    });
  }
});

module.exports = router;
