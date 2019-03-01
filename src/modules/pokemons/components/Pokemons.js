import React from "react";
import PropTypes from "prop-types";
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  fab: {
    bottom: theme.spacing.unit * 3,
    position: "absolute",
    right: theme.spacing.unit * 3
  }
});

function Pokemons(props) {
  const { classes } = props;
  return (
    <div>
      <Fab
        onClick={() => {}}
        color="primary"
        aria-label="add"
        className={classes.fab}
        variant={"extended"}
      >
        <AddIcon />
        Pokemon hinzufügen
      </Fab>
    </div>
  );
}

Pokemons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pokemons);
