// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  ActivityIndicatorIOS,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ListItem from './listItem.js';
import styles from '../styles/styles.js'

export default class SingleListScreen extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserSingleList();
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        onLongPress={() => {this.props.deleteListItem(item)}}
        onPress = {() => {this.props.toggleCheckOnListItem(item)}}
      >
        <View>
          <ListItem itemTitle={ item.title } itemContent={ item.content } isItemCrossedOff={ item.crossedOff} />
          <View style={ styles.separator } />
        </View>
      </TouchableHighlight>
    );
    }

  render() {
    const { lists, dataSource, isLoading } = this.props
      return (
        <View style={styles.container}>
          <ListView
            dataSource={this.props.dataSource}
            renderRow={this.renderItem.bind(this)}
            style={styles.listView}
          />
        </View>
      );
    // }
  }
}
