import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import completeTask from "./images/undraw_selection_92i4 (1).svg";
import doneTask from "./images/undraw_done_checking_ty9a (2).svg";
import { Button, Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Container className="container">
        <Row id="showcase">
          <Col md={6} sm={6}>
            <div className="showcase-left">
              <Slide left>
                <img src={completeTask} alt="Complete Task" />
              </Slide>
            </div>
          </Col>

          <Col md={6} sm={6}>
            <div className="showcase-right">
              <h1>Too much on your plate?</h1>
              <p className="lead">
                Organize your tasks and make your life easier.
              </p>
              <p className="lead">
                Become a true <strong>Task Master</strong>
              </p>
            </div>

            <Link to="/register">
              <Button className="button sign-up mx-2" variant="outline-dark">
                Sign up
              </Button>
            </Link>

            <Link to="/login">
              <Button className="button log-in mx-2" variant="info">
                Log in
              </Button>
            </Link>
          </Col>
        </Row>

        <Row id="categories">
          <Col md={6} sm={6}>
            <div className="categories-left">
              <p className="lead">
                <i className="fas fa-clipboard-check" /> Organize your tasks
              </p>
              <p className="lead">
                <i className="fas fa-clipboard-check" /> Check them off as your
                complete them
              </p>
              <p className="lead">
                <i className="fas fa-clipboard-check" /> Become a true{" "}
                <strong>Task Master</strong>
              </p>
            </div>
          </Col>
          <Col md={6} sm={6}>
            <div className="categories-right">
              <Slide right>
                <img src={doneTask} alt="done task" />
              </Slide>
            </div>
          </Col>
        </Row>

        <Row id="get-started">
          <Col xs={12}>
            <div className="get-started-text">
              <h2>Get started now!</h2>
            </div>
          </Col>
          <Col xs={12}>
            <div className="get-started-buttons">
              <Link to="/register">
                <Button className="button sign-up mx-2" variant="outline-dark">
                  Sign up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="button log-in mx-2" variant="info">
                  Log in
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <footer>
        <Slide bottom>
          <p className="text-center">Task Master Copyright &copy; 2019</p>
        </Slide>
      </footer>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
