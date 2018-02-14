import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BlogPostMaker extends Component {
  render() {
    let blogCollection = this.props.blogPosts.map(blogInfo => {
      return (
        <div className="container-fluid mt-4 mb-5 border rounded" key={blogInfo.id}>
          {console.log(blogInfo.title)}
          <div className="d-flex flex-row">
            <img
              src="http://clipart-library.com/images/6ip5kb5bT.jpg"
              className="border rounded mt-3 mb-3 mr-5"
              width="300"
              height="300"
              alt=""/>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="display-4 pt-4">{blogInfo.title}</h1>
                <p className="lead pt-4 text-secondary">
                  {blogInfo.content.substring(0, 300)}...
                </p>
                <Link
                  to={`/SingleBlog/${blogInfo.id}`}
                  className="btn btn-outline-success mb-3 d-block">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div>{blogCollection}</div>;
  }
}
