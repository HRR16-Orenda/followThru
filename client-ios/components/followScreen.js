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
    const { unfollowUser, acceptRecommend, selection } = this.props;
    let handler = unfollowUser.bind(null, item);
    return (
      <View>
        <View
          style={styles.followContainer}
        >
          <View style={styles.followInfo}>
            <Text style={styles.listTitle}>
              { item.username }
            </Text>
          </View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={handler}
          >
            <Image
              style={styles.buttonImage}
              source={require('../assets/Unfriend-50.png')}
            />
            <Text style={styles.buttonCategoryText}>{selection === 'followings' && 'Unfollow'}</Text>
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
          <View style={styles.followInfo}>
            <Text style={styles.listTitle}>
              {item.username}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={followUser.bind(null, item)}
          >
            <Image
              style={styles.buttonImage}
              source={require('../assets/AddUserMale-50.png')}
            />
            <Text style={styles.buttonCategoryText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={ styles.separator } />
      </View>
    );
  }

  _renderFollowersList(data) {
    return (
      <View style={styles.columnContainer}>
        <View style={styles.followingListContainer}>
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

  _renderSearchList(data) {
    return (
      <View style={styles.columnContainer}>
      <View style={styles.followResultContainer}>
        <Form onChange={this.props.submitHandler}/>
        <ListView
          dataSource={this.props.searchResult}
          renderRow={this._renderSearchItem.bind(this)}
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
        <View style={styles.recommendationTextContainer}>
          <Text style={styles.listTitle}>{item.title} </Text>
          <Text style={styles.listAuthor}>from {item.recommendedBy.username}</Text>
        </View>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={handler}
        >
          <Image
            style={styles.buttonImage}
            source={require('../assets/PlusMath-50.png')}
          />
          <Text style={styles.buttonCategoryText}>{item.category}</Text>
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
      <Image source={require('../assets/final2.jpg')} style={styles.image}>
        <View style={styles.containerTest}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={selectInbox}
            >
              <Image
                style={styles.buttonImage}
                source={require('../assets/Inbox-50.png')}
              />
              <Text style={styles.buttonCategoryText}>INBOX</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.mainButton}
              onPress={selectFollowings}
            >
              <Image
                style={styles.buttonImage}
                source={require('../assets/UserGroup-50.png')}
              />
              <Text style={styles.buttonCategoryText}>FRIENDS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={selectFollowers}
            >
              <Image
                style={styles.buttonImage}
                source={require('../assets/Search-50.png')}
              >
              </Image>
              <Text style={styles.buttonCategoryText}>SEARCH</Text>
           </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            {/* Default Text */}
            {follow.selection === 'inbox' && this._renderRecommendationsList(inbox)}
            {follow.selection === 'followings' && this._renderFollowersList(followings)}
            {follow.selection === 'followers' && this._renderSearchList(followers)}
          </View>
        </View>
      </Image>
    );
  }
}
