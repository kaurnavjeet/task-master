import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FilterLink from "./FilterLink";
import PropTypes from "prop-types";
import { VisibilityFilters } from "../../actions/visibilityFilter";

const DashboardActions = () => {
  return (
    <div>
      <span>Show:</span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

DashboardActions.propTypes = {};

export default DashboardActions;
