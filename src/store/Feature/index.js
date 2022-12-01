import { combineReducers } from "@reduxjs/toolkit";

import users from "./FeatureUser/userSlice";
import transaction from "./FeatureTransaction/transactionSlice";
import promo from "./FeaturePromo/promoSlice";
import contohReducer from "hooks/index";
import office from "./FeatureOffice/officeSlice";

const rootReducers = combineReducers({
    users,
    data: contohReducer,
    transaction,
    promo,
    office,
});

export default rootReducers;