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
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';
import Footer from './footer.js';
import ListItem from './listItem.js';
import styles from '../styles/styles.js'

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

export default class AllListsScreen extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserLists();
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
            size='large'/>
        <Text>
          Loading books...
        </Text>
      </View>
    );
  }

  renderItem(item) {
    if(this.props.isLoading) {
      return this.renderLoadingView
    }
    return (
      <TouchableHighlight
        onPress = {() => {
          Actions.singleListScreen();
        }}
      >
        <View>
          <ListItem item={ item } />
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
    }

  render() {
    const { lists, dataSource, isLoading } = this.props

    if(isLoading){
      return (
        <View style={styles.loading}>
          <ActivityIndicatorIOS
              size='large'/>
          <Text>
            Loading books...
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ListView
              dataSource={this.props.dataSource}
              renderRow={this.renderItem.bind(this)}
              style={styles.listView}
            />
          <View style={styles.container}>
            <Footer />
          </View>
        </View>
      );
    }
  }
}
