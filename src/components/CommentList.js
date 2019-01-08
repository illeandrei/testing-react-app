import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from 'actions';

class CommentList extends Component {
  // componentWillMount() {
  //   this.props.fetchComments();
  // }

  renderComments() {
    return this.props.comments.map(c => <li key={c}>{c}</li>);
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

export default connect(({ comments }) => ({
  comments
}), actions)(CommentList);
