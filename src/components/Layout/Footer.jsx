import React from "react";
import {
  PiLinkedinLogoDuotone,
  PiGithubLogoDuotone,
  PiTwitterLogoDuotone,
  PiArticleDuotone,
} from "react-icons/pi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>React-Firebase HouseHub: A House Marketplace Website</h3>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="GitHub">
          <Link to="http://www.github.com/malidipak">
            <PiGithubLogoDuotone color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Twitter">
          <Link to="http://www.twitter.com/__dipakmali__">
            <PiTwitterLogoDuotone color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="LinkedIn">
          <Link to="http://www.linkedin.com/in/malidipak">
            <PiLinkedinLogoDuotone color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Articles">
          <Link to="http://malidipak.hashnode.dev">
            <PiArticleDuotone color="black" size={30} />
          </Link>
        </p>
      </div>
      <h6>&copy; Dipak Mali</h6>
    </div>
  );
};

export default Footer;
