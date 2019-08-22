import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "../layout/Alert";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
// import { Container } from "react-bootstrap";

const Routes = () => {
  return (
    <Fragment>
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
