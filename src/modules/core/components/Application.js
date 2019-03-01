import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { muiTheme } from "../theme";

function Application({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme()}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

Application.propTypes = {
  children: PropTypes.node.isRequired
};

export default Application;
