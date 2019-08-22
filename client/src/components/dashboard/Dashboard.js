import React, { useState, useEffect, Fragment, useRef } from "react";
import { Container, Row, Col, Card, Form, Popover } from "react-bootstrap";
import { connect } from "react-redux";
import { getTodos } from "../../actions/todo";
import { addTodo } from "../../actions/todo";
import { completeTodo } from "../../actions/todo";
import { deleteTodo } from "../../actions/todo";

import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

import TransitionGroup from "react-transition-group/TransitionGroup";
// import DashboardActions from "./DashboardActions";
// import VisibleTodoList from "./VisibleTodoList";
import { VisibilityFilters } from "../../actions/visibilityFilter";

const Dashboard = ({
  todo: { todos },
  getTodos,
  addTodo,
  completeTodo,
  deleteTodo,
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
      {/* <VisibleTodoList />
      <DashboardActions /> */}
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
              <h4>No tasks found, please create a task to get started.</h4>
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
                    className="form-control"
                    id="todoField"
                    placeholder="Todo item"
                    name="content"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-success" type="submit">
                      Add Item
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
    </Container>
  );
};

Dashboard.propTypes = {
  todo: PropTypes.object.isRequired,
  getTodos: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,

  deleteTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todo: state.todo,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getTodos, addTodo, completeTodo, deleteTodo }
)(Dashboard);
