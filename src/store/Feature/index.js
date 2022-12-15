import { combineReducers } from "@reduxjs/toolkit";

import users from "./FeatureUser/userSlice";
import transactions from "./FeatureTransaction/transactionSlice";
import promo from "./FeaturePromo/promoSlice";
import office from "./FeatureOffice/officeSlice";
import loader from "./FeatureLoader/loaderSlice";
import reviews from "./FeatureReview/reviewSlice";

const rootReducers = combineReducers({
    users,
    transactions,
    promo,
    office,
    loader,
    reviews,
});

export default rootReducers;