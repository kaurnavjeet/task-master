import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { editTodo } from "../../actions/todo";
import PropTypes from "prop-types";

const TaskItem = props => {
  const { todo, editTodo, completeTodo, deleteTodo } = props;

  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState(todo.content);

  const handleEditing = e => {
    setEditing(true);
  };

  const handleChange = e => {
    setEditVal(e.target.value);
  };

  const handleEditingDone = (e, id) => {
    if (e.keyCode === 13) {
      debugger;
      editTodo({ editVal }, id);
      setEditing(false);
      setEditVal("");
    }
  };

  const viewStyle = {};
  const editStyle = {};

  if (editing) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  return (
    <Fade collapse bottom className={todo.isComplete ? "done" : ""}>
      <Card className={editing ? "true" : ""}>
        <Card.Body className="justify-content-between">
          <div style={viewStyle}>
            <span
              style={{
                textDecoration:
                  todo.isComplete === true ? "line-through" : "none"
              }}
            >
              <Form.Check
                onChange={() => completeTodo(todo._id)}
                data-id={todo._id}
                className="checkbox"
                inline
                label=""
                checked={todo.isComplete && "checked"}
                type="checkbox"
                id="inline-checkbox"
              />

              <label onDoubleClick={handleEditing}>{todo.content}</label>

              <button
                onClick={e => deleteTodo(todo._id)}
                className="action close "
                data-id={todo._id}
                type="button"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              {/* <button type="button" className="action edit" data-id={todo._id}>
                <span aria-hidden="true">
                  <i className="fas fa-pencil-alt edit-icon" />
                </span>{" "}
              </button> */}
            </span>
          </div>

          <input
            style={editStyle}
            className="input-edit"
            data-id={todo._id}
            type="text"
            value={editVal || ""}
            onChange={handleChange}
            onKeyDown={e => handleEditingDone(e, todo._id)}
          />
        </Card.Body>
      </Card>
    </Fade>
  );
};

TaskItem.propTypes = {
  editTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { editTodo }
)(TaskItem);
