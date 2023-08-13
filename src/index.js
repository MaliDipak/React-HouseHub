import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//styles
import "./styles/Header.css";
import "./styles/Footer.css";
import "./styles/Contact.css";
import "./styles/ForgotPassword.css";
import "./styles/Slider.css";
import "./styles/Homepage.css";
import "./styles/Spinner.css";
import "./styles/Offers.css";
import "./styles/ListingItem.css";
import "./styles/Signin.css";
import "./styles/Signup.css";
import "./styles/Listing.css";
import "./styles/Profile.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
