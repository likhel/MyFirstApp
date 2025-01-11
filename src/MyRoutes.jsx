import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/UserFrontend/HomePage";
import FindaPet from "./pages/UserFrontend/AdoptersEnd/FindaPet";
import LoginPage from "./pages/Auths/LoginPage";
import ListaPet from "./pages/UserFrontend/RehomersEnd/ListaPet";
import SignUpAsRehomer from "./pages/Auths/SignUpAsRehomer";
import ListaPetHousehold from "./pages/UserFrontend/RehomersEnd/ListaPetHousehold";
import ListaPetAboutPet from "./pages/UserFrontend/RehomersEnd/ListaPetAboutPet";
import AdopterForm from "./pages/UserFrontend/AdoptersEnd/AdopterForm";
import ListaPetType from "./pages/UserFrontend/RehomersEnd/ListaPetType";
import Donate from "./pages/UserFrontend/Donate";
import SignUpAsAdopter from "./pages/Auths/SignUpAsAdopter";
import ListaPetHealth from "./pages/UserFrontend/RehomersEnd/ListaPetHealth";
import ListaPetStory from "./pages/UserFrontend/RehomersEnd/ListaPetStory";
import FinalCheck from "./pages/UserFrontend/RehomersEnd/FinalCheck";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpAsAdopter />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="adopt-a-pet" element={<FindaPet />} />
          <Route path="list-a-pet" element={<ListaPet />} />
          <Route path="signupasregister" element={<SignUpAsRehomer />} />
          <Route path="pethousehold" element={<ListaPetHousehold />} />
          <Route path="aboutpet" element={<ListaPetAboutPet />} />
          <Route path="adopter-form" element={<AdopterForm />} />
          <Route path="pet-behaviour" element={<ListaPetType />} />
          <Route path="donate-now" element={<Donate />} />
          <Route path="pet-health" element={<ListaPetHealth />} />
          <Route path="pet-story" element={<ListaPetStory />} />
          <Route path="final-check" element={<FinalCheck/>} />
          
          
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
