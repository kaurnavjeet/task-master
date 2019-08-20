const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Todo = require("../../models/Todo");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const config = require("config");

// @route   GET api/todos
// @desc    Get all todos
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/todos
// @desc    Create a todo
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("content", "Content is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { content, isComplete } = req.body;
    try {
      const user = await User.findById(req.user.id).select("-password");

      const newTodo = new Todo({
        content: content,
        isComplete: isComplete,
        user: req.user.id
      });

      await newTodo.save();
      res.json(newTodo);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/todos/:id
// @desc    Update a todo
// @access  Private
router.put("/:id", auth, async (req, res) => {
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
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    // Check user
    if (todo.user.toString() !== req.user.id) {
      return res.json(401).json({ msg: "User not authorized" });
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
// @access  Private
router.delete("/", auth, async (req, res) => {
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
