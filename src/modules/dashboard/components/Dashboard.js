import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Drawer,
  List,
  Toolbar,
  IconButton,
  Typography,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Pokeball } from "mdi-material-ui";
import MenuItem from "./MenuItem";
import Breadcrumbs from "../containers/Breadcrumbs";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  root: {
    display: "flex"
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  toolbar: theme.mixins.toolbar
});

function Application(props) {
  const { children, classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle2" color="inherit">
            Pokemon Viewer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <MenuItem label={"Pokemons"} to={"/dashboard/pokemons"}>
            <Pokeball />
          </MenuItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
}

Application.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Application);
