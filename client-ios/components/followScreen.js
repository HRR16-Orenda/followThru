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
import Form from '../containers/followFormContainer.js';
import styles from '../styles/styles.js';


export default class FollowScreen extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem(item) {
    const { unfollowUser } = this.props;
    return (
      <View>
        <View
          style={styles.followContainer}
        >
          <Text style={styles.followInfo}>
            {item.username}
          </Text>
          <TouchableOpacity
            onPress = {unfollowUser.bind(null, item)}
            style={styles.followIcon}
          >
            <Text>
              Unfollow
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.separator } />
      </View>
    );
  }

  _renderSearchItem(item) {
    const { followUser } = this.props;
    return (
      <View>
        <View
          style={styles.followContainer}
        >
          <Text style={styles.followInfo}>
            {item.username}
          </Text>
          <TouchableOpacity
            onPress = {followUser.bind(null, item)}
            style={styles.followIcon}
          >
            <Text>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.separator } />
      </View>
    );
  }

  _renderList(data) {
    return (
      <View style={styles.columnContainer}>
        {this.props.follow.selection === 'followings' && (
          <View style={styles.followResultContainer}>
            <Form onChange={this.props.submitHandler}/>
            <Text style={styles.description}>
              Search Results
            </Text>
            <ListView
              dataSource={this.props.searchResult}
              renderRow={this._renderSearchItem.bind(this)}
              style={styles.listView}
              enableEmptySections={true}
            />
          </View>
        )}
        <View style={styles.followingListContainer}>
          <Text style={styles.description}>
            List
          </Text>
          <ListView
            dataSource={data}
            renderRow={this._renderItem.bind(this)}
            style={styles.listView}
            enableEmptySections={true}
          />
        </View>
      </View>
    )
  }

  render() {
    const {
      followings,
      followers,
      inbox,
      user,
      lists,
      selectInbox,
      selectFollowers,
      selectFollowings,
      follow
    } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectInbox}
            >
              <Text style={styles.buttonText}>
                Inbox
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectFollowers}
            >
              <Text style={styles.buttonText}>
                Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
              onPress={selectFollowings}
            >
              <Text style={styles.buttonText}>
                Followings
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            {/* Default Text */}
            {follow.selection === 'inbox' && this._renderList(inbox)}
            {follow.selection === 'followers' && this._renderList(followers)}
            {follow.selection === 'followings' && this._renderList(followings)}
          </View>
        </View>
    );
  }
}
