import React, { Component } from "react";
import "./Header.scss";

class JumboTron extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center jumbotron">
          <div className="col-11 col-sm-12 col-md-9 col-lg-10 header">
            <h1>RECIPES</h1>
          </div>
        </div>
        <div className="row justify-content-md-center m-3 p-0 jumbotron-body">
          <div className="col-12 col-md-9 col-lg-5">
            <div className="card-left">
              <img className="card-img-top" src="https://via.placeholder.com/120x100" alt="Card image cap" />
              <div className="card-body">
                <h2 className="card-title">Lorem ipsum dolor sit amet consectetur..</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-5">
            <div className="card-right">
              <img className="card-img-top" src="https://via.placeholder.com/120x100" alt="Card image cap" />
              <div className="card-body">
                <h2 className="card-title">Lorem ipsum dolor sit amet consectetur.</h2>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JumboTron;
