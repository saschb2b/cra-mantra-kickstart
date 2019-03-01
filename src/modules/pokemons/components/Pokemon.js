import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import PokemonCard from "./PokemonCard";

const styles = theme => ({
  fab: {
    bottom: theme.spacing.unit * 3,
    position: "fixed",
    right: theme.spacing.unit * 3
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 16
  }
});

function Pokemon(props) {
  const { classes, pokemon } = props;
  console.log(pokemon);
  return <div>pokemon!!</div>;
}

Pokemon.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemon: PropTypes.shape()
};

Pokemon.defaultProps = {
  pokemon: null
};

export default withStyles(styles)(Pokemon);
