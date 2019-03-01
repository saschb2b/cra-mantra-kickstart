import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Typography, withStyles } from "@material-ui/core";
import PokemonCard from "./PokemonCard";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 800
  },
  loading: {
    display: "flex",
    justifyContent: "center"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap"
  },
  image: {
    height: "auto",
    width: 200
  },
  section: {
    paddingBottom: 16
  }
});

function Pokemon(props) {
  const { classes, loading, pokemon } = props;
  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  const { evolutions, image, name, number } = pokemon;

  return (
    <div className={classes.root}>
      <Typography variant={"caption"}>{number}</Typography>
      <Typography variant={"h3"}>{name}</Typography>
      <img className={classes.image} src={image} />
      {evolutions && (
        <div className={classes.section}>
          <Typography variant={"h5"}>Evolutions</Typography>
          <div className={classes.grid}>
            {evolutions.map(evolution => (
              <PokemonCard key={evolution.id} pokemon={evolution} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Pokemon.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemon: PropTypes.shape()
};

Pokemon.defaultProps = {
  pokemon: null
};

export default withStyles(styles)(Pokemon);
