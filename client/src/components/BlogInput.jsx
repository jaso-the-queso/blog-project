import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";



class BlogInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  updateTitle(value) {
    this.setState({ title: value });
    console.log({ title: value });
  }
  updateContent(value) {
    this.setState({ content: value });
    console.log({ content: value });
  }

  createBlog() {
    fetch('http://localhost:3000/api/blogs', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content
      }),
      headers: new Headers({"Content-Type": "application/json"}) 
      })
      .then((res) => {
        return res.json()
      })
      .then((body) => {
        console.log(body)
        console.log(this.state)
      })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="blogform">
          <div className="form-group p-5">
            <label htmlFor="exampleFormControlTextarea1" className="lead">
              Title...
            </label>
            <textarea onChange={(event) => {this.updateTitle(event.target.value)}}
              className="form-control p-1 m-2"
              id="exampleFormControlTextarea1"
              rows="1"
            />
            <label htmlFor="exampleFormControlTextarea2" className="lead">
              Content...
            </label>
            <textarea
            onChange={(event) => {this.updateContent(event.target.value)}}
              className="form-control p-4 m-2"
              id="exampleFormControlTextarea2"
              rows="11"
            />
            <Link 
            to="/Main"
            onClick={() => {this.createBlog()}}
            className="btn btn-outline-success my-2 my-sm-0">
              Post
            </Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BlogInput;
