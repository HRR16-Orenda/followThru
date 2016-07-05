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


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress = {() => {console.log('yay')}}
      >
        <View>
          <Text>
            {item.get('username')}
          </Text>
          <View style={ styles.separator } />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { clearSuggestion, dataSource } = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryButton}
            >
              <Text style={styles.signUpButtonText}>
                Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
            >
              <Text style={styles.signUpButtonText}>
                Followings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryButton}
            >
              <Text style={styles.signUpButtonText}>
                Inbox
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* Default Text */}
            {dataSource.rowIdentities[0].length === 0 ? <Text>No Items</Text>
              :  <ListView
                dataSource={dataSource}
                renderRow={this.renderItem.bind(this)}
                style={styles.listView}
                 />
            }
          </View>
        </View>
    );
  }
}
