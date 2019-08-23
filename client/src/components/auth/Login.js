import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container id="login">
      <form className="border border-dark form" onSubmit={handleSubmit}>
        <h1 className="login-title">Log In</h1>

        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            name="email"
            onChange={handleChange}
            value={email}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword1">Password</label>
          <input
            name="password"
            onChange={handleChange}
            value={password}
            type="password"
            className="form-control"
            id="inputPassword1"
            placeholder="Password"
          />
        </div>

        <Button
          type="submit"
          className="button log-in login"
          variant="outline-dark"
        >
          Log In
        </Button>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
