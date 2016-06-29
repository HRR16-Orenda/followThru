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
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUserSingleList();
  }

  _setModalVisible(visible, item) {
    visible ? this.props.modalOpen(item) : this.props.modalClose();
  }

  renderItem(item) {
    return (
      <TouchableHighlight
        onLongPress={this._setModalVisible.bind(this, true, item)}
        onPress = {() => {this.props.toggleItem(item)}}
      >
        <View>
          <ListItem
            itemTitle={ item.title }
            itemContent={ item.content }
            completed={ item.completed}
          />
          <View style={ styles.separator } />
        </View>
      </TouchableHighlight>
    );
    }

  render() {
    const { lists, dataSource, modal, deleteListItem } = this.props
      return (
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modal.isOpen}
            onRequestClose={() => {this._setModalVisible(false)}}
          >
            <View style={[styles.container, styles.modalBackground]}>
              <View style={styles.innerContainer}>
                <Text style={styles.innerContainerText}>
                  This modal was presented
                </Text>
                <Text style={styles.innerContainerText} onPress={deleteListItem.bind(null, modal.item)}>
                  Delete it!!!
                </Text>
                <Text style={styles.innerContainerText}>
                  {modal.item.content}
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
