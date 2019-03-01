import { Button, Paper, Typography, withStyles } from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0`,
    width: 200
  },
  header: {
    backgroundColor: Grey[200],
    display: "flex",
    justifyContent: "space-between",
    padding: 8
  },
  headerText: {
    color: Grey[700]
  },
  image: {
    height: "auto",
    margin: "8px auto",
    width: 100
  },
  details: {
    margin: theme.spacing.unit
  }
});

function Pokemon({ classes, pokemon }) {
  return (
    <Paper className={classes.root} key={pokemon.id}>
      <div className={classes.header}>
        <Typography className={classes.headerText} variant={"caption"}>
          {pokemon.number}
        </Typography>
        <Typography className={classes.headerText}>{pokemon.name}</Typography>
      </div>
      <img className={classes.image} src={pokemon.image} />
      <Button className={classes.details} variant={"outlined"}>
        Details
      </Button>
    </Paper>
  );
}

Pokemon.propTypes = {
  classes: PropTypes.object.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(Pokemon);
