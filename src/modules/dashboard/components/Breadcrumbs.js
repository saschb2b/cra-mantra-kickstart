import React from "react";
import PropTypes from "prop-types";
import MUIBreadcrumbs from "@material-ui/lab/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Breadcrumb from "./Breadcrumb";

function Breadcrumbs(props) {
  return (
    <MUIBreadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      arial-label="Breadcrumb"
    >
      {props.crumbs.map(({ name, to }, i) => (
        <Breadcrumb
          key={name}
          color={props.crumbs.length - 1 === i ? "textPrimary" : "inherit"}
          to={to}
        >
          {name}
        </Breadcrumb>
      ))}
    </MUIBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  )
};

export default Breadcrumbs;
