import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import theme from "../../theme";
import Grid from "@material-ui/core/Grid";
import Datatable from "../../components/Datatable";
import Search from "./components/Search";
import Notification from "../../components/Notification";

const styles = theme => ({
  root: {
    paddingTop: 2 * theme.spacing.unit
  }
});

const columns = [
  { id: "Rank", displayName: "Rank" },
  { id: "Grade", displayName: "Grade" },
  { id: "ChannelName", displayName: "Channel Name" },
  { id: "VideoUploads", displayName: "Video Uploads" },
  { id: "Subscribers", displayName: "Subscribers" },
  { id: "VideoViews", displayName: "Video Views" }
];

class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: this.props.channels,
      searchTerm: ""
    };
  }

  componentDidMount() {
    const { getChannels } = this.props;
    getChannels();
  }

  onSearch = value => {
    this.setState({ searchTerm: value });
  };

  render() {
    const {
      classes,
      getChannelsLoading,
      getChannelsError,
      clearNotificationMessage
    } = this.props;
    const { channels, searchTerm } = this.state;
    const regex = new RegExp(searchTerm, "i");
    const data = channels.filter(row => regex.test(row["ChannelName"]));
    return (
      <Grid container className={classes.root} id="homeRoot">
        <Grid item md={1} />
        {getChannelsLoading ? (
          "Getting data"
        ) : (
          <Grid item md={10}>
            <Search onSearch={this.onSearch} />
            <Datatable columns={columns} rows={data} />
            {getChannelsError ? (
              <Notification
                message={getChannelsError}
                error
                onClose={clearNotificationMessage}
              />
            ) : (
              ""
            )}
          </Grid>
        )}
        <Grid item md={1} />
      </Grid>
    );
  }
}

ChannelList.propTypes = {
  classes: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  getChannels: PropTypes.func.isRequired,
  getChannelsLoading: PropTypes.bool.isRequired,
  getChannelsError: PropTypes.string.isRequired,
  clearNotificationMessage: PropTypes.func.isRequired
};

export default withStyles(styles)(ChannelList);
