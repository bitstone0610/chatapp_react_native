/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  commentChanged,
  sendComment,
  setParentID,
  setLiked,
  setSubCommentLiked,
} from '../../actions';

import { CommentsPage } from '../../pages';

class Comments extends Component {
  render() {
    const {
      comments,
      tempComment,
      authUser,
      toWhom,
      commentChanged,
      sendComment,
      setParentID,
      setLiked,
      setSubCommentLiked,
    } = this.props;
    const commentsList = _.toArray(comments);
    return (
      <CommentsPage
        authUser={authUser}
        comments={commentsList}
        commentChanged={commentChanged}
        tempComment={tempComment}
        toWhom={toWhom}
        sendComment={sendComment}
        setParentID={setParentID}
        setLiked={setLiked}
        setSubCommentLiked={setSubCommentLiked}
      />
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  tempComment: state.temp.comment,
  toWhom: state.temp.toWhom,
  authUser: state.auth.authUser,
});

const mapDispatchToProps = {
  commentChanged,
  sendComment,
  setParentID,
  setLiked,
  setSubCommentLiked,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
