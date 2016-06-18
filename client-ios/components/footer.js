// @flow
import React, { Component } from "react";
import {
  TabBarIOS,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddScreen from './addScreen.js'
// import ListScreen from './listScreen.js'

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
          title="Add"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress = {() => {
            this.setState({
              selectedTab: 'add'
            });
          }}
        >
          {/*<View style={styles.container}><AddScreen /></View>*/}
          <View style={styles.container}><Text>Home Tab</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Lists"
          iconName="ios-albums-outline"
          selectedIconName="ios-albums"
          onPress = {() => {
            this.setState({
              selectedTab: 'lists'
            });
          }}
        >
          {/*<ListScreen />*/}
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
