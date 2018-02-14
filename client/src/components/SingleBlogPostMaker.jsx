import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SingleBlogPostMaker extends Component {
  render() {
     let blogPost = this.props.singleBlogPost;
    return (
        <div className="card" key={blogPost.id}>
          <div className="card-block">
            <h4 className="display-4 p-4">{blogPost.title}</h4>
            <p className="lead p-5 text-secondary">
              {blogPost.content}
            </p>
          </div>
        </div>
      );
  }
}
