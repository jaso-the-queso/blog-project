import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`)
    .then(res => {
        return res.json()
    })
    .then(data => {
        this.setState({ post: data })
    })
  }

  updateTitle(value) {
    this.setState({ post: {
        title: value,
        content: this.state.post.content 
    }
    })
    console.log({ title: value })
  }

  updateContent(value) {
    this.setState({ post: {
        title: this.state.post.title,
        content: value
    }
    })
    console.log({ title: value })
  }

  editBlog() {
    fetch(`http://localhost:3000/api/blogs/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.post.title,
        content: this.state.post.content
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
            <textarea
              onChange={event => {
                this.updateTitle(event.target.value);
              }}
              className="form-control p-1 m-2"
              id="exampleFormControlTextarea1"
              rows="1"
              value= {this.state.post.title}
            />
            <label htmlFor="exampleFormControlTextarea2" className="lead">
              Content...
            </label>
            <textarea
              onChange={event => {
                this.updateContent(event.target.value);
              }}
              className="form-control p-4 m-2"
              id="exampleFormControlTextarea2"
              rows="11"
              value= {this.state.post.content}
            />
            <Link to="/Main" 
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={() => {this.editBlog()}}>
              Update
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditBlog;
