import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class SubComment extends Component {
  onReply() {
    const { commentID, setParentID } = this.props;
    setParentID(commentID);
  }

  onToggleLike() {
    const { liked, commentID, subCommentID, setSubCommentLiked } = this.props;
    let payload;
    if (liked) {
      payload = {
        parentCommentID: commentID,
        subCommentID,
        liked: false,
      };
      setSubCommentLiked(payload);
    } else {
      payload = {
        parentCommentID: commentID,
        subCommentID,
        liked: true,
      };
      setSubCommentLiked(payload);
    }
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
    );
  }
}

export default SubComment;
