import React from "react";
import { Redirect, Route } from "react-router-dom";
import JWT from "jwt-client";

// TODO: Add login for jwt use
export default () => (
  <Route
    exact
    path="/"
    render={() => {
      const token = JWT.get();
      if (token || !token) {
        return <Redirect to="/dashboard" />;
      }
      return <Redirect to="/auth/login" />;
    }}
  />
);
