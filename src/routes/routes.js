import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import NotFound from "../layouts/notFound";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Bar from "../pages/bar";
import CreateUserForm from "../pages/createUser";
import EnrollPersonForm from "../pages/enrollPerson";
import Line from "../pages/line";
import Pie from "../pages/pie";
import FAQ from "../pages/faq";
import Geography from "../pages/geography";
import Calendar from "../pages/calendar/calendar";
import { PrivateRoute } from "./privateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/team"
        element={
          <PrivateRoute>
            <Team />
          </PrivateRoute>
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <Contacts />
          </PrivateRoute>
        }
      />
      <Route
        path="/invoices"
        element={
          <PrivateRoute>
            <Invoices />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-user"
        element={
          <PrivateRoute>
            <CreateUserForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/enroll-person"
        element={
          <PrivateRoute>
            <EnrollPersonForm />
          </PrivateRoute>
        }
      />
      <Route
        path="/bar"
        element={
          <PrivateRoute>
            <Bar />
          </PrivateRoute>
        }
      />
      <Route
        path="/pie"
        element={
          <PrivateRoute>
            <Pie />
          </PrivateRoute>
        }
      />
      <Route
        path="/line"
        element={
          <PrivateRoute>
            <Line />
          </PrivateRoute>
        }
      />
      <Route
        path="/faq"
        element={
          <PrivateRoute>
            <FAQ />
          </PrivateRoute>
        }
      />
      <Route
        path="/calendar"
        element={
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        }
      />
      <Route
        path="/geography"
        element={
          <PrivateRoute>
            <Geography />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
