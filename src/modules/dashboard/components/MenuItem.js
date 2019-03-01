import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core";
import Grey from "@material-ui/core/colors/grey";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  root: {
    marginLeft: 2
  },
  activeRoot: {
    backgroundColor: Grey[200],
    borderLeft: `2px ${theme.palette.secondary.light} solid`
  },
  activeIcon: {
    color: theme.palette.secondary.light
  }
});

function MenuItem(props) {
  const { children, classes, label, location, to } = props;
  const active = location && location.pathname.includes(to);
  return (
    <ListItem
      className={active ? classes.activeRoot : classes.root}
      component={Link}
      button
      dense
      key={label}
      to={to}
    >
      <ListItemIcon className={active ? classes.activeIcon : {}}>
        {children}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string
  }),
  to: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(MenuItem));
