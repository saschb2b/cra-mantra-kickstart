import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";
import PokemonCard from "./PokemonCard";
import Attack from "./Attack";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 800
  },
  grid: {
    display: "flex",
    flexWrap: "wrap"
  },
  header: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    margin: "16px 0",
    padding: 16
  },
  image: {
    height: "auto",
    width: 200
  },
  loading: {
    display: "flex",
    justifyContent: "center"
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

  const { attacks, evolutions, image, name, number } = pokemon;

  return (
    <div className={classes.root}>
      <Paper className={classes.header}>
        <img alt={name} className={classes.image} src={image} />
        <div>
          <Typography variant={"caption"}>{number}</Typography>
          <Typography variant={"h3"}>{name}</Typography>
        </div>
      </Paper>
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
  pokemon: PropTypes.shape({
    attacks: PropTypes.shape({
      fast: PropTypes.arrayOf(
        PropTypes.shape({
          damage: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired
        })
      ),
      special: PropTypes.arrayOf(
        PropTypes.shape({
          damage: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired
        })
      )
    }),
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    evolutions: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
      })
    )
  })
};

Pokemon.defaultProps = {
  pokemon: null
};

export default withStyles(styles)(Pokemon);
