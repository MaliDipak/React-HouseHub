//done

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 = "/assets/rent.jpg";
  const img2 = "/assets/sale.jpg";
  return (
    <Layout>
      <Slider />
      <div className="home-cat row d-flex align-items-center justify-content-center">
        <h1>Category</h1>
        <div className="col-md-5 ">
          <div className="Imagecontainer">
            <img src={img1} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/rent")}>
              FOR RENT
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="Imagecontainer">
            <img src={img2} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/sale")}>
              FOR SALE
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
