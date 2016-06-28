// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  ActivityIndicatorIOS,
  StyleSheet,
  ListView,
  Text,
  View,
  Modal,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import ListItem from './listItem.js';
import styles from '../styles/styles.js'

export default class SingleListScreen extends Component {
  state = {
    modalVisible: true
  }

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserSingleList();
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
    console.log('_setModalVisible called with ', visible);
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        onLongPress={this._setModalVisible.bind(this, true)}
        onPress = {() => {this.props.toggleCheckOnListItem(item)}}
      >
        <View>
          <ListItem
            itemTitle={ item.title }
            itemContent={ item.content }
            isItemCrossedOff={ item.crossedOff}
          />
          <View style={ styles.separator } />
        </View>
      </TouchableHighlight>
    );
    }

  render() {
    const { lists, dataSource, isLoading } = this.props
      return (
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this._setModalVisible(false)}}
          >
            <View style={[styles.container, styles.modalBackground]}>
              <View style={styles.innerContainer}>
                <Text style={styles.innerContainerText}>
                  This modal was presented
                </Text>
                <TouchableHighlight
                  style={styles.modalButton}
                  onPress={this._setModalVisible.bind(this, false)}
                  underlayColor='black'
                >
                  <Text style={styles.buttonText}>
                    Close
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <View style={styles.container}>
            <ListView
              dataSource={dataSource}
              renderRow={this.renderItem.bind(this)}
              style={styles.listView}
            />
          </View>
        </View>
      );
    // }
  }
}
