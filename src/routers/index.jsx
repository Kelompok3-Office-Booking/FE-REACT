import { LayoutAdmin } from "components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LoginPage } from "../pages";

const SetupRouters = () => {
  return (
    <Routes>
      {/*Landingpage Routes*/}
      <Route path="/" element={<LandingPage />} />

      {/*Protected Routes*/}
      <Route path="admin-dashboard">
        <Route index element={<LayoutAdmin />} />
      </Route>

      {/*Private Routes*/}
      <Route path="login">
        <Route index element={<LoginPage />} />
      </Route>

      {/*Notfound Routes*/}
      <Route />
    </Routes>
  );
};

export default SetupRouters;
