import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
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
}))(CommentList);
