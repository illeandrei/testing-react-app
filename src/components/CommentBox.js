import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions"; //importing a dir will return its index.js file

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Enter a Comment</h2>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
