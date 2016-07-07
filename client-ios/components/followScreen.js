// @flow

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../containers/followFormContainer.js';
import styles from '../styles/styles.js';


export default class FollowScreen extends Component {
  constructor(props) {
    super(props);
  }

  _renderFollowerItem(item) {
    console.log(item);
    const { unfollowUser, acceptRecommend, selection } = this.props;
    let handler;
    if(selection === 'followings') {
      handler = unfollowUser.bind(null, item);
    } else if(selection === 'followers') {
      handler = null;
    } else {
      handler = acceptRecommend.bind(null, item);
    }
    return (
      <View>
        <View
          style={styles.followContainer}
        >
          <View style={styles.followInfo}>
            <Text>
              {item.username || item.title + '(' + item.category + ')'}
            </Text>
            <Text>
              {item.username || `Recommended By : ${item.recommendedBy.username}`}
            </Text>
          </View>
          <TouchableOpacity
            onPress = {handler}
            style={styles.followIcon}
          >
            <Text>
              {selection === 'followings' && 'Unfollow'}
              {selection === 'followers' && null}
              {selection === 'inbox' && 'Add'}
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
          <Image
            style={styles.buttonImage}
            source={false ? require('../assets/Contacts-50.png') : require('../assets/AddUserMale-50.png')}
          />
            <Text>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.separator } />
      </View>
    );
  }

  _renderFollowersList(data) {
    return (
      <View style={styles.columnContainer}>
        {this.props.follow.selection === 'followings' && (
          <View style={styles.followResultContainer}>
            <Form onChange={this.props.submitHandler}/>
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
            renderRow={this._renderFollowerItem.bind(this)}
            style={styles.listView}
            enableEmptySections={true}
          />
        </View>
      </View>
    )
  }

  _renderRecommendationsItem(item) {
    const { unfollowUser, acceptRecommend, selection } = this.props;
    let handler = acceptRecommend.bind(null, item);
    return (
      <View
        style={styles.followContainer}
      >
        <Image source={{uri: item.img}}
          style={item.category === "LISTEN" ? styles.musicThumbnail : styles.thumbnail}
        />
        <Text style={styles.followInfo}>
          {item.username + ' recommends ' + item.title}
        </Text>
        <TouchableOpacity
          onPress = {handler}
          style={styles.followIcon}
        >
          <Text>
            {selection === 'inbox' && 'Add to ' + item.category.toLowerCase() + ' list'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderRecommendationsList(data) {
    return (
      <View style={styles.columnContainer}>
        <View style={styles.followingListContainer}>
          <ListView
            dataSource={data}
            renderRow={this._renderRecommendationsItem.bind(this)}
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
                Recommendations
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
            {follow.selection === 'inbox' && this._renderRecommendationsList(inbox)}
            {follow.selection === 'followers' && this._renderFollowersList(followers)}
            {follow.selection === 'followings' && this._renderFollowersList(followings)}
          </View>
        </View>
    );
  }
}
