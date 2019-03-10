const initialChannelData = {
  channels: [],
  getChannelsLoading: false,
  getChannelsError: ""
};

export default (state = initialChannelData, action) => {
  switch (action.type) {
    case "GET_CHANNELS_BEGIN":
      return {
        ...state,
        getChannelsLoading: true
      };
    case "GET_CHANNELS_SUCCESS":
      return {
        ...state,
        channels: action.channels,
        getChannelsLoading: false
      };
    case "GET_CHANNELS_ERROR":
      return {
        ...state,
        getChannelsError: action.message,
        getChannelsLoading: false
      };
    case "CLEAR_NOTIFICATION_MESSAGE":
      return {
        ...state,
        getChannelsError: ""
      };
    default:
      return state;
  }
};
