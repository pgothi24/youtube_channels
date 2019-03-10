import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class Datatable extends Component {
  state = {
    page: 0,
    rowsPerPage: 5
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { classes, columns, rows } = this.props;
    const { rowsPerPage, page } = this.state;
    const data = rows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(obj => {
                return <TableCell>{obj.displayName}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6}>No records found</TableCell>
              </TableRow>
            ) : (
              data.map(row => (
                <TableRow key={row.id}>
                  {columns.map(({ id }) => {
                    return <TableCell>{row[id]}</TableCell>;
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

Datatable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Datatable);
