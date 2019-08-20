import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" fixed="top" className="navbar">
      <Navbar.Brand href="#home" className="navbar-default">
        <i
          className="fas fa-clipboard-list"
          style={{ width: "40", height: "40" }}
        />
        {" Task Master"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="nav-link">
          <Nav.Link href="#home">
            <Button className="button sign-up" variant="outline-dark">
              Sign up
            </Button>
          </Nav.Link>
          <Nav.Link href="#link">
            <Button className="button log-in" variant="btn-outline">
              Log in
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
