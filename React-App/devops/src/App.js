import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/HomePage";
import Login from "./assets/Login";
import ChangePassword from "./assets/ChangePassword";
import DevPage from "./assets/DevPage";



function App() {
  return (
      <Routes>
        <Route path="/" index element={<HomePage />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/change-password" index element={<ChangePassword />} />
          <Route path="/dev-page" index element={<DevPage />} />
      </Routes>
  );
}

export default App;
