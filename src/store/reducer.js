import { combineReducers } from "redux";

import channelData from "./Channel/reducers";

const rootReducer = combineReducers({
  channelData
});

export default rootReducer;
