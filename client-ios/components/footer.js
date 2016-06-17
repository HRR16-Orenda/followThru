// @flow
import React, { Component } from "react";
import {
  TabBarIOS,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'add'
    }
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItem
        title="Home"
        iconName="ios-home-outline"
        selectedIconName="ios-home"
        onPress = {() => {
          this.setState({
            selectedTab: 'add'
          });
        }}>
        </Icon.TabBarItem>
        <Icon.TabBarItem
        title="Lists"
        iconName="ios-albums-outline"
        selectedIconName="ios-albums"
        onPress = {() => {
          this.setState({
            selectedTab: 'lists'
          });
        }}>
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  }
});
