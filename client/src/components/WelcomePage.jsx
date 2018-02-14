import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import Main from './Main';





class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4 text-center">Welcome to Jumble!</h1>
            <p className="lead">
              :)
            </p>
            <Link to="/Main"className="btn btn-outline-success my-2 my-sm-0">ENTER THE SITE</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default WelcomePage;
