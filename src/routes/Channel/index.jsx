import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getChannels,
  clearNotificationMessage
} from "../../store/Channel/actions";

import component from "./ChannelList";

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getChannels, clearNotificationMessage }, dispatch);

const mapStateToProps = state => ({
  channels: state.channelData.channels,
  getChannelsLoading: state.channelData.getChannelsLoading,
  getChannelsError: state.channelData.getChannelsError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component);
