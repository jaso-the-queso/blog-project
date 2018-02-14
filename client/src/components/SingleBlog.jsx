import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SingleBlogPostMaker from "./SingleBlogPostMaker";
import 'isomorphic-fetch';

class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      singleBlogObject: {}
    }

  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
    .then(res => {return res.json()}).then(obj => {
        this.setState({singleBlogObject: obj})
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SingleBlogPostMaker singleBlogPost={this.state.singleBlogObject} />
      </React.Fragment>
    );
  }
}

export default SingleBlog;
