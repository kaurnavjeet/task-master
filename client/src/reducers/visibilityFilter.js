import { VisibilityFilters } from "../actions/visibilityFilter";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  const { type, filter } = action;
  switch (type) {
    case "SET_VISIBILITY_FILTER":
      return filter;
    default:
      return state;
  }
};

export default visibilityFilter;
