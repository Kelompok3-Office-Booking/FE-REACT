import { Dashboard } from "@mui/icons-material";
import {
  LayoutAdmin,
  DashboardPage,
  TransactionPage,
  UserPage,
  OfficePage,
  ReviewPage,
  PromoPage,
  AdminPage,
  EditOffice,
  AddOffice,
} from "components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, LoginPage } from "../pages";
import PrivateRoute from "./privateRoutes";
import ProtectedRoute from "./protectedRoutes";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin-dashboard",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin-dashboard/dashboard",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <DashboardPage /> }],
      },
      {
        path: "/admin-dashboard/users",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <UserPage /> }],
      },
      {
        path: "/admin-dashboard/transactions",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <TransactionPage /> }],
      },
      {
        path: "/admin-dashboard/offices",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <OfficePage /> }],
      },
      {
        path: "/admin-dashboard/reviews",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <ReviewPage /> }],
      },
      {
        path: "/admin-dashboard/promos",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <PromoPage /> }],
      },
      {
        path: "/admin-dashboard/dashboard",
        element: <ProtectedRoute />,
        children: [{ index: true, element: <DashboardPage /> }],
      },
    ],
  },
];

export default routes;
/* <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <LayoutAdmin />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" index element={<DashboardPage />} />
     
        <Route path="user" element={<UserPage />} />
        <Route path="office" element={<OfficePage />} />
        <Route path="editOffice" element={<EditOffice />} />
        <Route path="addOffice" element={<AddOffice />} />
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="promo" element={<PromoPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>

      <Route path="login">
        <Route index element={<LoginPage />} />
      </Route>

      <Route />
    </Routes>*/
