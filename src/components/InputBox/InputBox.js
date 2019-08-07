import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

class InputBox extends Component {
  render() {
    const { container, textinput } = styles;
    return (
      <View style={container}>
        <TextInput style={textinput} placeholder={'Write a comment...'} />
      </View>
    );
  }
}

export default InputBox;
