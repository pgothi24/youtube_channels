import { all } from "redux-saga/effects";
import ChannelSagas from "./Channel/sagas";

function* rootSaga() {
  yield all([...ChannelSagas]);
}

export default rootSaga;
