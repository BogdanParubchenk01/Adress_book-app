import { Route, Routes } from 'react-router-dom';

import { Login } from 'login-app';
import App from './App';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/phonebook" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
