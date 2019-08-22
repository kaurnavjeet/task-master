import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import { VisibilityFilters } from "../../actions/visibilityFilter";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.isComplete);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.isComplete);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todo, state.visibilityFilter)
});

export default connect(mapStateToProps)(TaskItem);
