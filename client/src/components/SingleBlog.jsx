import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SingleBlogPostMaker from "./SingleBlogPostMaker";
import "isomorphic-fetch";

class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleBlogObject: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
      .then(res => {
        return res.json();
      })
      .then(obj => {
        this.setState({ singleBlogObject: obj });
      });
  }

  deleteBlog() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`, {
      method: "DELETE"
    }).then(res => res.json());
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SingleBlogPostMaker singleBlogPost={this.state.singleBlogObject} />
        <Link
          to="/Main"
          onClick={() => {
            this.deleteBlog();
          }}
          className="btn btn-outline-success my-2 my-sm-0"
        >
          Delete Blog Post
        </Link>
        <Link
          to={`/EditBlog/${this.props.match.params.id}`}
          className="btn btn-outline-success my-2 my-sm-0"
        >
          Edit Blog
        </Link>
      </React.Fragment>
    );
  }
}

export default SingleBlog;
