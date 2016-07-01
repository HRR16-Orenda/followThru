// @flow

import React, { Component } from "react";
import {
  TouchableOpacity,
  ActivityIndicatorIOS,
  StyleSheet,
  ListView,
  Text,
  View,
  Button
} from 'react-native';

import Modal from './modal.js';
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
      <TouchableOpacity
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
      </TouchableOpacity>
    );
    }

  render() {
    const { lists, dataSource, modal, deleteListItem, filter, deleteConfirm, deleteConfirmOn, deleteConfirmOff } = this.props
      return (
        <View>
          <Modal
            modal={modal}
            toggler={this._setModalVisible.bind(this)}
            deleteConfirm={deleteConfirm}
            deleteConfirmOn={deleteConfirmOn}
            deleteConfirmOff={deleteConfirmOff}
            pressHandler={deleteListItem}
          />
          <View style={styles.container}>
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
    // }
  }
}
