import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    register({ name, email, password });
  };

  //Redirect if registered
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container id="register" className="justify-content-center">
      <form className="border border-dark form" onSubmit={handleSubmit}>
        <h1 className="register-title">Sign Up</h1>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            onChange={handleChange}
            value={name}
            name="name"
            type="name"
            className="form-control"
            id="inputName"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword1">Password</label>
            <input
              onChange={handleChange}
              value={password}
              name="password"
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword2">Re-enter Password</label>
            <input
              onChange={handleChange}
              value={password2}
              name="password2"
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Re-enter Password"
            />
          </div>
        </div>

        <Button
          className="button sign-up register"
          variant="outline-dark"
          type="submit"
        >
          Sign up
        </Button>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
