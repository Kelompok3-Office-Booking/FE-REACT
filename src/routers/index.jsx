import { LayoutAdmin, DashboardPage, TransactionPage, UserPage, OfficePage, ReviewPage, PromoPage, AdminPage } from "components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages";

const SetupRouters = () => {
  return (
    <Routes>
      {/*Landingpage Routes*/}
      <Route path="/" element={<LandingPage />} />

      {/*Protected Routes*/}
      <Route path="/admin-dashboard" element={<LayoutAdmin />} >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="office" element={<OfficePage />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="promo" element={<PromoPage />} />
        <Route path="admin" element={<AdminPage />} />

      </Route>

      {/*Private Routes*/}
      <Route></Route>

      {/*Notfound Routes*/}
      <Route />
    </Routes >
  );
};

export default SetupRouters;
