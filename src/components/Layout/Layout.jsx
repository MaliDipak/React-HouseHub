import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="ML-React House, Sell House, Rent House"
        />
        <meta name="author" content="Dipak Mali" />
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "ML-React House",
};

export default Layout;
