import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todo";
import { addTodo } from "../../actions/todo";
import { completeTodo } from "../../actions/todo";
import { deleteTodo } from "../../actions/todo";
import { deleteAllTodos } from "../../actions/todo";
import DashboardActions from "./DashboardActions";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

const Dashboard = ({
  todo: { todos },
  getTodos,
  addTodo,
  completeTodo,
  deleteTodo,
  deleteAllTodos,
  auth: { user }
}) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ content });
    setContent("");
  };

  const handleDelete = e => {
    e.preventDefault();
    const res = window.confirm(
      "Are you sure you want to delete all tasks? This can not be undone."
    );
    if (res) {
      deleteAllTodos();
    }
  };

  return (
    <Container id="dashboard-container">
      <Row className="dashboard-title">
        <Col xs={8}>
          <div>
            <h5>
              <i className="far fa-user-circle" /> Welcome{" "}
              {user && user.name.trim().split(" ")[0]}
            </h5>
          </div>
        </Col>
      </Row>
      <DashboardActions getTodos={getTodos} />
      <Row id="dashboard" className="dashboard-list">
        <Col xs={12}>
          <div className="col-12 mb-2">
            {todos && todos.length > 0 ? (
              todos.map(todo => (
                <TaskItem
                  key={todo._id}
                  todo={todo}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <Card>
                <Card.Body className="justify-content-between">
                  No tasks found, please create a task to get started.
                </Card.Body>
              </Card>
            )}
          </div>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Row id="dashboard-input">
              <Col xs={12}>
                <div className="input-group mt-4 mb-1">
                  <input
                    onChange={handleChange}
                    value={content}
                    type="text"
                    className="form-control "
                    id="todoField"
                    placeholder="Task item"
                    name="content"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success" type="submit">
                      Add Task
                    </button>
                  </div>
                </div>
                <small id="emailHelp" className="form-text text-muted">
                  Item Count: {todos.length}
                </small>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row style={{ paddingTop: "50px" }}>
        <Col xs={12}>
          <Button
            className="action-button"
            style={{
              paddingRight: "40px",
              paddingLeft: "40px",
              marginRight: "20px"
            }}
            variant="outline-danger"
            type="submit"
            onClick={handleDelete}
          >
            Delete All Tasks
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

Dashboard.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteAllTodos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getTodos, addTodo, completeTodo, deleteTodo, deleteAllTodos }
)(Dashboard);
