import { LayoutAdmin } from "components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages";

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
      <Route></Route>

      {/*Notfound Routes*/}
      <Route />
    </Routes>
  );
};

export default SetupRouters;
