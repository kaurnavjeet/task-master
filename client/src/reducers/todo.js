import {
  GET_TODOS,
  CLEAR_TODOS,
  ADD_TODO,
  // EDIT_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  COMPLETE_TODO,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../actions/types";

const initialState = {
  todos: [],
  todo: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
        loading: false
      };
    // case EDIT_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.map(todo =>
    //       todo._id === payload._id ? { ...todo, payload } : todo
    //     ),
    //     loading: false
    //   };
    case SHOW_ACTIVE:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.isComplete),
        loading: false
      };
    case SHOW_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.isComplete),
        loading: false
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo._id === payload)
            return {
              ...todo,
              isComplete: !todo.isComplete
            };
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== payload),
        loading: false
      };
    case CLEAR_TODOS:
    case DELETE_ALL_TODOS:
      return {
        ...state,
        todos: [],
        loading: false
      };
    default:
      return state;
  }
}
