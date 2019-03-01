import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function getBreadcrumbs(path) {
  const result = path
    .split("/")
    .map(s => {
      switch (s) {
        case "pokemons":
          return {
            name: "Pokemon",
            to: "/dashboard/pokemons"
          };
        default:
          return null;
      }
    })
    .filter(s => s !== null);

  if (result.length <= 0) {
    return [];
  }

  return [
    {
      name: "Dashboard",
      to: "/dashboard"
    },
    ...result
  ];
}

function Container(props) {
  const { location } = props;
  return (
    <Breadcrumbs crumbs={getBreadcrumbs(location ? location.pathname : "")} />
  );
}

Container.propTypes = {
  selectedLocation: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(Container);
