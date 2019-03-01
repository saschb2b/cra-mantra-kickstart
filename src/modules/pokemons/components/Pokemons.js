import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
  },
  loading: {
    display: "flex",
    justifyContent: "center"
  }
});

function Pokemons(props) {
  const { classes, loading, pokemons } = props;
  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div className={classes.grid}>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Fab
        onClick={() => {}}
        color="primary"
        aria-label="add"
        className={classes.fab}
        variant={"extended"}
      >
        <AddIcon />
        Add Pokemon
      </Fab>
    </div>
  );
}

Pokemons.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemons: PropTypes.array
};

Pokemons.defaultProps = {
  pokemons: []
};

export default withStyles(styles)(Pokemons);
