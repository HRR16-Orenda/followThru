// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
  ActivityIndicatorIOS,
  Text,
  View,
  Modal,
  Image
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
          <TouchableWithoutFeedback
            onPress={() => console.log('pressed!!!')}
          >
            <View style={[styles.container, styles.modalBackground]}>
              <View style={styles.innerContainer}>
                <Image
                  style={styles.modalImage}
                  source={{uri: modal.item.img}}
                />
                <Text style={styles.innerContainerText}>
                  This modal was presented
                </Text>
                <Text style={styles.innerContainerText}>
                  {modal.item.content}
                </Text>
                <TouchableHighlight
                  style={styles.modalButton}
                  onPress={pressHandler.bind(null, modal.item)}
                  underlayColor='black'
                >
                  <Text style={styles.buttonText}>
                    Delete item from the list
                  </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.modalButton}
                  onPress={toggler.bind(null, false)}
                  underlayColor='black'
                >
                  <Text style={styles.buttonText}>
                    Close Modal Screen
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        );
    // }
  }
}
