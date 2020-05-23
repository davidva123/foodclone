import React, { Component } from "react";
import "./navbar.scss";

class Navigation extends Component {
  state = {};
  render() {
    return (

      <div className="nav-bar-bg">

        <div className="container">

          <div class="nav-bar-left">
            
            <div class="logo">

              <p>Food<span class="dot">.</span></p>

            </div>

            <div class="nav-bar-items">

              <div class="item">

                <a className="nav-link" href="#">Recipes</a>

              </div>

              <div class="item">

                <a className="nav-link" href="#">Popular</a>

              </div>

              <div class="item">

                <a className="nav-link" href="#">Summer Grilling</a>

              </div>

            </div>
          </div>

          <div class="nav-bar-right">

            <a href="#">Login</a>

          </div>
          
        </div>
      </div>




     
      /*<div className="row">
             <nav className=" navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="#">
            NavbarLogo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  RECIPES
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  POPULAR
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                 SUMMER GRILLSS
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Login/Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>*/

    );
  }
}

export default Navigation;
