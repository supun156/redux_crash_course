import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "./actions/postActions";
import { withRouter } from "react-router-dom";

class PostformComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      name: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // useEffect(()=>{},[]);

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit Post</button>
        </form>
      </div>
    );
  }
}

PostformComponent.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default withRouter(connect(null, { createPost })(PostformComponent));
