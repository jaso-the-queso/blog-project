import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import BlogPostMaker from "./BlogPostMaker";
import 'isomorphic-fetch';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogArray: []
    };
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/blogs")
    .then(res => { return res.json()})
    .then(obj => this.setState({ blogArray: obj }))
  };

  render() {
    return (
      <React.Fragment >
      <Navbar />
      <div className="container-fluid border" >
        <div className="container-fluid mt-4 mb-5 border rounded">
          <h1 className="display-4 text-center pt-4">Welcome to Jumble!</h1>
          <Link to="/BlogInput" className="text-muted unstyled TEXT-CENTER">
              <p className="lead text-center">CLICK HERE TO WRITE A BLOG</p>
          </Link>
        </div>
        <BlogPostMaker blogPosts={this.state.blogArray}/>
      </div>
    </React.Fragment>
    );
  }
}

export default Main;
