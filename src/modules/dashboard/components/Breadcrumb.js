import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  link: {
    "& > a": {
      color: "inherit",
      textDecoration: "none"
    }
  }
});

/**
 * Material-UI Wrapper for the react-router-dom Link component for Breadcrumbs
 */
function Breadcrumb({ children, classes, color, to }) {
  if (to) {
    return (
      <Typography className={classes.link} color={color}>
        <Link to={to}>{children}</Link>
      </Typography>
    );
  }
  return <Typography color={color}>{children}</Typography>;
}

Breadcrumb.propTypes = {
  /**
   * Text to be displayed.
   */
  children: PropTypes.string.isRequired,
  /**
   * Further styling provided by material-ui.
   */
  classes: PropTypes.object.isRequired,
  /**
   * Sets the different color options.
   */
  color: PropTypes.oneOf(["inherit", "textPrimary"]),
  /**
   * If set, a click redirects to the location.
   */
  to: PropTypes.string
};

Breadcrumb.defaultProps = {
  color: "inherit",
  to: null
};

export default withStyles(styles, { withTheme: true })(Breadcrumb);
