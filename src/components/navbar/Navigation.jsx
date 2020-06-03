import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navigation = () => {
  return (
    <div className="nav-bar-bg">
      <div className="container">
        <div className="nav-bar-left">
          <div className="logo">
            <p>
              Food<span className="dot ">.</span>
            </p>
          </div>

          <div className="nav-bar-items">
            <div className="item">
              <Link className="nav-link" to="/">
                Recipes
              </Link>
            </div>

            <div className="item">
              <Link className="nav-link" to="/">
                Popular
              </Link>
            </div>

            <div className="item">
              <Link className="nav-link" to="/">
                Summer Grilling
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-bar-right">
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
