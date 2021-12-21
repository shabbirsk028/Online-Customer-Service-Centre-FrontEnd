import counterReducer from "./counterreducer";

import loginReducer from "./loginreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  
  login: loginReducer,
});

export default rootReducer;