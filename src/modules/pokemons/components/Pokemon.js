import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Typography, withStyles } from "@material-ui/core";
import PokemonCard from "./PokemonCard";
import Attack from "./Attack";

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

  console.log(pokemon);

  const { attacks, evolutions, image, name, number } = pokemon;

  return (
    <div className={classes.root}>
      <Typography variant={"caption"}>{number}</Typography>
      <Typography variant={"h3"}>{name}</Typography>
      <img className={classes.image} src={image} />
      <div className={classes.section}>
        <Typography variant={"h5"}>Fast Attacks</Typography>
        <div className={classes.grid}>
          {attacks.fast.map(attack => (
            <Attack
              key={attack.name}
              damage={attack.damage}
              name={attack.name}
              type={attack.type}
            />
          ))}
        </div>
      </div>
      <div className={classes.section}>
        <Typography variant={"h5"}>Special Attacks</Typography>
        <div className={classes.grid}>
          {attacks.special.map(attack => (
            <Attack
              key={attack.name}
              damage={attack.damage}
              name={attack.name}
              type={attack.type}
            />
          ))}
        </div>
      </div>
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
