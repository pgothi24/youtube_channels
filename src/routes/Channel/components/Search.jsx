import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
});

class Search extends Component {
  handleTextChange = ({ target }) => {
    const { onSearch } = this.props;
    const { value } = target;
    onSearch(value);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="Search Channel Name"
          onChange={this.handleTextChange}
        />
        <IconButton className={classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);
