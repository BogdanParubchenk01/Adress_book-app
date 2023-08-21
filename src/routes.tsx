import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from "react";

import App from './App';
import LoginApp from 'login-app';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginApp homepage={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};
