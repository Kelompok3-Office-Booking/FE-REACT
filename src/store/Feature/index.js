import { combineReducers } from "@reduxjs/toolkit";

import users from "./FeatureUser/userSlice";
import transaction from "./FeatureTransaction/transactionSlice";
import promo from "./FeaturePromo/promoSlice";
import office from "./FeatureOffice/officeSlice";
import loader from "./FeatureLoader/loaderSlice";

const rootReducers = combineReducers({
  users,
  transaction,
  promo,
  office,
  loader,
});

export default rootReducers;
