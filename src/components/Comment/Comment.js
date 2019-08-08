import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import SubComment from '../SubComment';

import styles from './styles';

class Comment extends Component {
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

  onReply() {
    const { commentID, setParentID } = this.props;
    setParentID(commentID);
  }

  onToggleLike() {
    const { liked, commentID, setLiked } = this.props;
    let payload;
    if (liked) {
      payload = {
        commentID,
        value: false,
      };
      setLiked(payload);
    } else {
      payload = {
        commentID,
        value: true,
      };
      setLiked(payload);
    }
  }

  renderSubComments() {
    const {
      subComments,
      commentID,
      setParentID,
      setSubCommentLiked,
    } = this.props;
    let subCommentsList = [];
    const subCommentArray = _.toArray(subComments);
    subCommentArray.map((item, index) => {
      subCommentsList.push(
        <SubComment
          key={index}
          commentID={commentID}
          subCommentID={item.subCommentID}
          poster={item.poster}
          content={item.content}
          liked={item.liked}
          setParentID={setParentID}
          setSubCommentLiked={setSubCommentLiked}
        />,
      );
    });
    return subCommentsList;
  }
  render() {
    const {
      container,
      avatar,
      textbox,
      interactions,
      interact,
      text,
      text_active,
      text_white,
      text_black,
      poster_active,
      poster_inactive,
    } = styles;
    const { liked, poster, content } = this.props;
    return (
      <View>
        <View style={container}>
          <Image
            style={avatar}
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
            }}
          />
          <View style={textbox}>
            <View style={liked ? text_active : text}>
              <Text style={liked ? poster_active : poster_inactive}>
                {poster}
              </Text>
              <Text style={liked ? text_white : text_black}>{content}</Text>
            </View>
            <View style={interactions}>
              <Text>15h</Text>
              <TouchableOpacity onPress={() => this.onToggleLike()}>
                <Text style={interact}>{liked ? 'Unlike' : 'Like'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onReply()}>
                <Text style={interact}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.renderSubComments()}
      </View>
    );
  }
}

export default Comment;
