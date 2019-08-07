import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Comment, InputBox } from '../../components';
import Icons from '../../assets/icons';

import styles from './styles';

class CommentsPage extends Component {
  render() {
    const {
      container,
      commentContainer,
      headerContainer,
      rightIcon,
      leftIcon,
      headerTitle,
    } = styles;
    return (
      <View style={container}>
        <View style={headerContainer}>
          <Image source={Icons.BackIcon} style={leftIcon} />
          <Text style={headerTitle}>Comments</Text>
          <Image source={Icons.BackIcon} style={rightIcon} />
        </View>
        <View style={commentContainer}>
          <View>
            <Comment liked={true} />
            <Comment />
          </View>
          <InputBox />
        </View>
      </View>
    );
  }
}

export default CommentsPage;
