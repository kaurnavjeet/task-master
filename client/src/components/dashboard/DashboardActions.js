import React from "react";
import PropTypes from "prop-types";
import { Row, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { showActive } from "../../actions/todo";
import { showCompleted } from "../../actions/todo";

const DashboardActions = ({ showActive, showCompleted, getTodos }) => {
  return (
    <Row style={{ paddingBottom: "75px" }}>
      <Col xs={12}>
        <Button
          className="action-button"
          style={{
            paddingRight: "40px",
            paddingLeft: "40px",
            marginRight: "20px"
          }}
          variant="outline-dark"
          type="submit"
          onClick={e => {
            e.preventDefault();
            getTodos();
          }}
        >
          All
        </Button>
        <Button
          className="action-button"
          style={{
            paddingRight: "30px",
            paddingLeft: "30px",
            marginRight: "20px"
          }}
          variant="outline-primary"
          type="submit"
          onClick={e => {
            e.preventDefault();
            showActive();
          }}
        >
          Active
        </Button>
        <Button
          className="action-button"
          style={{
            paddingRight: "20px",
            paddingLeft: "20px"
          }}
          variant="outline-warning"
          type="submit"
          onClick={e => {
            e.preventDefault();
            showCompleted();
          }}
        >
          Completed
        </Button>
      </Col>
    </Row>
  );
};

DashboardActions.propTypes = {
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired,
  getTodos: PropTypes.func.isRequired
};

export default connect(
  null,
  { showActive, showCompleted }
)(DashboardActions);
