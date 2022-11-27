import { combineReducers } from "@reduxjs/toolkit";

import users from "./FeatureUser/userSlice";
import transaction from "./FeatureTransaction/transactionSlice";
import contohReducer from "hooks/index";

const rootReducers = combineReducers({
  users,
  data: contohReducer,
  transaction,
});

export default rootReducers;
