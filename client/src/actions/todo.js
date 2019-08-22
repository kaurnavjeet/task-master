"use strict";

import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_TODOS,
  TODO_ERROR,
  DELETE_TODO,
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODOS,
  EDIT_TODO,
  SHOW_ALL_TODOS
} from "./types";

//Get todos
export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get("/api/todos");
    dispatch({
      type: GET_TODOS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};

//Add Todo
export const addTodo = content => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(`/api/todos`, content, config);
    dispatch({
      type: ADD_TODO,
      payload: res.data
    });

    dispatch(setAlert("Task Created", "success"));
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};

//Edit todo
export const editTodo = (content, id) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json, charset=utf-8"
      }
    };

    const res = await axios.put(`/api/todos/${id}`, content, config);
    console.log(res);
    console.log(res.json);
    dispatch({
      type: EDIT_TODO,
      payload: res.data
    });

    dispatch(setAlert("Task Updated", "success"));
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};

//Complete todo
export const completeTodo = id => async dispatch => {
  try {
    const res = await axios.post(`/api/todos/${id}/complete`);
    dispatch({
      type: COMPLETE_TODO,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};

//Delete todo
export const deleteTodo = id => async dispatch => {
  try {
    const res = await axios.delete(`api/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id
    });

    dispatch(setAlert("Task Removed", "success"));
  } catch (error) {
    dispatch({
      type: TODO_ERROR,
      payload: { msg: error.response.data.msg, status: error.response.status }
    });
  }
};
