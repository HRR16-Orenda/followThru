// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  ActivityIndicatorIOS,
  Text,
  View,
  Modal,
} from 'react-native';

import styles from '../styles/styles.js'

export default class SingleListScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { modal, pressHandler, toggler } = this.props
      return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modal.isOpen}
            onRequestClose={() => {toggler(false)}}
          >
            <View style={[styles.container, styles.modalBackground]}>
              <View style={styles.innerContainer}>
                <Text style={styles.innerContainerText}>
                  This modal was presented
                </Text>
                <Text style={styles.innerContainerText} onPress={pressHandler.bind(null, modal.item)}>
                  Delete it!!!
                </Text>
                <Text style={styles.innerContainerText}>
                  {modal.item.content}
                </Text>
                <TouchableHighlight
                  style={styles.modalButton}
                  onPress={toggler.bind(null, false)}
                  underlayColor='black'
                >
                  <Text style={styles.buttonText}>
                    Close
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          );
    // }
  }
}
