import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <Link to="/Main" className="text-muted unstyled">
                <p className="lead">HOME</p>
              </Link>
              <Link to="/BlogInput" className="text-muted unstyled">
                <p className="lead">WRITE</p>
              </Link>
              <Link to="/ContactPage" className="text-muted unstyled">
                <p className="lead">CONTACT</p>
              </Link>
            </div>
          </div>
          <nav className="navbar navbar-toggleable-md navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;