// @flow

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../containers/FormContainer.js';
import styles from '../styles/styles.js';


export default class FollowScreen extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem(item) {
    return (
      <View
        style={styles.followContainer}
      >
        <Text style={styles.followInfo}>
          {item.username}
        </Text>
        <TouchableOpacity
          onPress = {() => {console.log('unfollow!!!')}}
          style={styles.followIcon}
        >
          <Text>
            Unfollow
          </Text>
        </TouchableOpacity>
        <View style={ styles.separator } />
      </View>
    );
  }

  _renderList(data) {
    return (
      <ListView
        dataSource={data}
        renderRow={this._renderItem.bind(this)}
        style={styles.listView}
        enableEmptySections={true}
      />
    )
  }

  _renderSearch() {
    return (
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => console.log('you', text)}
      />
    )
  }

  render() {
    const {
      followings,
      followers,
      user,
      lists,
      selectSearch,
      selectFollowers,
      selectFollowings,
      follow
    } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectSearch}
            >
              <Text style={styles.signUpButtonText}>
                Search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectFollowers}
            >
              <Text style={styles.signUpButtonText}>
                Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectFollowings}
            >
              <Text style={styles.signUpButtonText}>
                Followings
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* Default Text */}
            {follow.selection === 'search' && this._renderSearch()}
            {follow.selection === 'followers' && this._renderList(followers)}
            {follow.selection === 'followings' && this._renderList(followings)}
          </View>
        </View>
    );
  }
}
