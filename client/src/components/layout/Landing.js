import React, { Fragment } from "react";
import completeTask from "./images/undraw_selection_92i4 (1).svg";
import doneTask from "./images/undraw_done_checking_ty9a (2).svg";
import { Button, Container, Row, Col, ButtonToolbar } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Landing = () => {
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

            <Button className="button sign-up mx-2" variant="outline-dark">
              Sign up
            </Button>
            <Button className="button log-in mx-2" variant="info">
              Log in
            </Button>
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
              <Button className="button sign-up mx-2" variant="outline-dark">
                Sign up
              </Button>
              <Button className="button log-in mx-2" variant="info">
                Log in
              </Button>
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

export default Landing;
