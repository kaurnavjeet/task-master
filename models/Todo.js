const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
