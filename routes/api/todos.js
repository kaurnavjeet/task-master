const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");
const config = require("config");

// @route   GET api/todos
// @desc    Get all todos
// @access  Public for now
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/todos
// @desc    Create a todo
// @access  Public for now
router.post("/", async (req, res) => {
  const { content, isComplete } = req.body;
  try {
    const newTodo = new Todo({
      content: content,
      isComplete: isComplete
    });

    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   PUT api/todos/:id
// @desc    Update a todo
// @access  Public for now
router.put("/:id", async (req, res) => {
  try {
    let todo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { content: req.body.content, isComplete: req.body.isComplete } },
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/todos/:id
// @desc    Delete a todo
// @access  Public for now
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    // Remove todo
    await todo.remove();
    res.json({ msg: "Todo deleted" });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/todos
// @desc    Delete all todos
// @access  Public for now
router.delete("/", async (req, res) => {
  try {
    await Todo.find().deleteMany();
    res.json({ msg: "All todos deleted" });
  } catch (error) {
    console.error(error.message);
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.status(500).send("Server error");
  }
});

module.exports = router;
