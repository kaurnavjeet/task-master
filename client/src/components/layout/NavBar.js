import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <NavLink to="/dashboard">
        <Button className="button sign-up" variant="outline-dark">
          Dashboard
        </Button>
      </NavLink>

      <NavLink onClick={logout} to="/">
        <Button className="button log-in" variant="btn-outline">
          Log out
        </Button>
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavLink to="/register">
        <Button className="button sign-up" variant="outline-dark">
          Sign up
        </Button>
      </NavLink>

      <NavLink to="/login">
        <Button className="button log-in" variant="btn-outline">
          Log in
        </Button>
      </NavLink>
    </Fragment>
  );

  return (
    <Navbar collapseOnSelect expand="sm" fixed="top" className="navbar">
      <Link to="/">
        <Navbar.Brand className="navbar-default">
          <i
            className="fas fa-clipboard-list"
            style={{ width: "40", height: "40" }}
          />
          {" Task Master"}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-link">
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
