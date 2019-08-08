import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import Icons from '../../assets/icons';
import styles from './styles';

class InputBox extends Component {
  onChangeText(text) {
    const { commentChanged } = this.props;
    commentChanged(text);
  }
  onSendComment() {
    const {
      sendComment,
      authUser,
      tempComment,
      toWhom,
      setParentID,
      commentChanged,
    } = this.props;

    const payload = {
      parentID: toWhom,
      poster: authUser,
      content: tempComment,
    };

    sendComment(payload);
    setParentID(null);
    commentChanged('');
  }
  render() {
    const { container, textinput, sender } = styles;
    const { tempComment } = this.props;
    return (
      <View style={container}>
        <TextInput
          onChangeText={this.onChangeText.bind(this)}
          style={textinput}
          value={tempComment}
          placeholder={'Write a comment...'}
        />
        <TouchableOpacity onPress={() => this.onSendComment()}>
          <Image source={Icons.Sender} style={sender} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputBox;
