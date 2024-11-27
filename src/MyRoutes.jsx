import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/UserFrontend/HomePage";
import FindaPet from "./pages/UserFrontend/AdoptersEnd/FindaPet";
import SignUp from "./pages/Auths/SignUp";
import LoginPage from "./pages/Auths/LoginPage";
import ListaPet from "./pages/UserFrontend/RehomersEnd/ListaPet";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="adopt-a-pet" element={<FindaPet />} />
          <Route path="list-a-pet" element={<ListaPet />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
