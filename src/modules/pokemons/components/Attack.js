import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, withStyles } from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: `0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0`,
    width: 205
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
  content: {
    padding: 16
  }
});

function Attack({ classes, damage, name, type }) {
  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.headerText}>{type}</Typography>
        <Typography className={classes.headerText}>{damage}</Typography>
      </div>
      <div className={classes.content}>
        <Typography align={"center"}>{name}</Typography>
      </div>
    </Paper>
  );
}

Attack.propTypes = {
  damage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default withStyles(styles)(Attack);
