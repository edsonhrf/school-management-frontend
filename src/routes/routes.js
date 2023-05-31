import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../scenes/login/login";
import NotFound from "../layouts/notFound";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import Calendar from "../scenes/calendar/calendar";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;