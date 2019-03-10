import { takeEvery, put, select, call } from "redux-saga/effects";
import axios from "axios";
import * as actions from "./actions";

export default [takeEvery("GET_CHANNELS", getChannels)];

function* getChannels(action) {
  try {
    yield put(actions.getChannelsBegin());
    const endpoint =
      "https://serious-lizard-64.localtunnel.me/youtube/channels";
    const response = yield call(axios.get, endpoint);
    console.log(response);
    // const responseData = response.data;
    // console.log(response.data);
    // yield put(actions.getChannelsSuccess(responseData));
  } catch (e) {
    console.log(e);
    const message = e.message;
    yield put(actions.getChannelsError(message));
  }
}
