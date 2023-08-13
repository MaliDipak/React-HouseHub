import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/HomePage";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";

import Category from "./pages/Category";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/editlisting/:listingId" element={<EditListing />} />

        <Route
          path="/category/:categoryName/:listingId"
          element={<Listing />}
        />
        <Route path="/contact/:landlordId" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
