export function getChannels() {
  console.log("action");
  return {
    type: "GET_CHANNELS"
  };
}

export function getChannelsBegin() {
  return {
    type: "GET_CHANNELS_BEGIN"
  };
}

export function getChannelsSuccess(channels) {
  return {
    type: "GET_CHANNELS_SUCCESS",
    channels
  };
}

export function getChannelsError(message) {
  return {
    type: "GET_CHANNELS_ERROR",
    message
  };
}

export function clearNotificationMessage() {
  return {
    type: "CLEAR_NOTIFICATION_MESSAGE"
  };
}
