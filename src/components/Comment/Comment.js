import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import SubComment from '../SubComment';

import styles from './styles';

class Comment extends Component {
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
      poster,
    } = styles;
    const { liked } = this.props;
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
              <Text style={liked ? poster_active : poster}>Michael Moss</Text>
              <Text style={liked ? text_white : text_black}>
                Theses problems often appear when you scale and iterate on your
                products.
              </Text>
            </View>
            <View style={interactions}>
              <Text>15h</Text>
              <Text style={interact}>{liked ? 'Unlike' : 'Like'}</Text>
              <Text style={interact}>Reply</Text>
            </View>
          </View>
        </View>
        <View>
          <SubComment liked />
        </View>
      </View>
    );
  }
}

export default Comment;
