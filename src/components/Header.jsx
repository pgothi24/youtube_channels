import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import theme from "../theme";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  toolBar: {
    background: theme.palette.primary.dark
  },
  logo: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  link: {
    fontSize: 18,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "lightgrey"
    }
  },
  item: {
    marginRight: 4 * theme.spacing.unit
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="headerContainer">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense" className={classes.toolBar}>
            <div className={classes.logo}>
              <Typography
                color="inherit"
                className={classNames(classes.link, classes.item)}
                onClick={this.onHomeClick}
              >
                {"Youtube Channels"}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
