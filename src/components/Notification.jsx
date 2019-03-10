import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  error: {
    backgroundColor: theme.snackbar.error
  },
  success: {
    backgroundColor: theme.snackbar.success
  },
  icon: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center",
    fontWeight: 500
  }
});

const Notification = props => {
  const { classes, message, error, onClose, vertical } = props;

  return (
    <Snackbar anchorOrigin={{ vertical, horizontal: "left" }} open>
      <SnackbarContent
        id="msg"
        className={error ? classes.error : classes.success}
        message={
          <span className={classes.message}>
            {error ? (
              <ErrorIcon className={classes.icon} />
            ) : (
              <CheckCircleIcon className={classes.icon} />
            )}
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={() => onClose()}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  vertical: PropTypes.string
};

Notification.defaultProps = {
  error: false,
  vertical: "bottom"
};

export default withStyles(styles)(Notification);
