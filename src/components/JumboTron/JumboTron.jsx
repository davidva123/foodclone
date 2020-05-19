import React, { Component } from "react";
import "./JumboTron.scss";

class JumboTron extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-md-center my-5 jumbotron">
          <div className="col col-lg-2">
            <h1>HEADER</h1>
          </div>
        </div>
        <div className="row justify-content-md-center my-2">
          <div className="col col-lg-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
          <div className="col col-lg-3">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
