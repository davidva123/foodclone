import React, { Component } from "react";
import "./Header.scss";
import { FeaturedRecipe } from "../FeaturedRecipe/FeaturedRecipe";

class JumboTron extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center jumbotron">
          <div className="col-11 col-sm-12 col-md-9 col-lg-10">
            <h1>RECIPES</h1>
          </div>
        </div>
        <div className="row justify-content-md-center m-3 p-0 jumbotron-body">
          <FeaturedRecipe />
          <FeaturedRecipe />
        </div>
      </React.Fragment>
    );
  }
}

export default JumboTron;
