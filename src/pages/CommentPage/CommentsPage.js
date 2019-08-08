import React, { Component } from 'react';
import { Animated, View, Text, Image, ScrollView } from 'react-native';
import { Comment, InputBox } from '../../components';
import Icons from '../../assets/icons';

import styles from './styles';

class CommentsPage extends Component {
  state = {
    fade: new Animated.Value(0),
    count: 4,
  };

  componentDidMount() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  renderComments() {
    const { comments, setParentID, setLiked, setSubCommentLiked } = this.props;
    let commentsList = [];
    comments.map(item => {
      commentsList.push(
        <Comment
          key={item.comment.commentID}
          commentID={item.comment.commentID}
          poster={item.poster}
          content={item.comment.content}
          liked={item.comment.liked}
          subComments={item.comment.subComments}
          setParentID={setParentID}
          setLiked={setLiked}
          setSubCommentLiked={setSubCommentLiked}
        />,
      );
    });
    return commentsList;
  }

  render() {
    const {
      container,
      commentContainer,
      headerContainer,
      rightIcon,
      leftIcon,
      headerTitle,
      commentList,
    } = styles;
    let { fade } = this.state;
    let animatedStyle = { opacity: fade };
    const {
      commentChanged,
      tempComment,
      sendComment,
      authUser,
      toWhom,
      setParentID,
    } = this.props;
    return (
      <View style={container}>
        <View style={headerContainer}>
          <Image source={Icons.BackIcon} style={leftIcon} />
          <Text style={headerTitle}>Comments</Text>
          <Image source={Icons.BackIcon} style={rightIcon} />
        </View>
        <View style={commentContainer}>
          <ScrollView>
            <Animated.View style={animatedStyle}>
              <View style={commentList}>{this.renderComments()}</View>
            </Animated.View>
          </ScrollView>
          <InputBox
            tempComment={tempComment}
            authUser={authUser}
            toWhom={toWhom}
            commentChanged={commentChanged}
            sendComment={sendComment}
            setParentID={setParentID}
          />
        </View>
      </View>
    );
  }
}

export default CommentsPage;
