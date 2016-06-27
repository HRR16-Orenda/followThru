// @flow
import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text
} from 'react-native';

// icon name set matched with title props
const icons = {
  Add: 'ios-create-outline',
  List: 'ios-albums-outline',
  Settings: 'ios-settings-outline'
}

export default class TabIcon extends React.Component {
  render(){
    // Set default name for Icon
    let name = icons[this.props.title] || 'ios-create-outline';
    return (
      <View>
        <Icon name={name} size={30} color={this.props.selected ? 'blue' :'black'}/>
      </View>
    );
  }
}
