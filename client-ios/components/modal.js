// @flow

import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  ActivityIndicatorIOS,
  Text,
  View,
  Modal,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/styles.js'

export default class SingleListScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
  Linking.canOpenURL(this.props.modal.item.url)
    .then(supported => {
      if (supported) {
        Linking.openURL(this.props.modal.item.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.modal.item.url);
      }
    });
  }

  render() {
    const {
      modal,
      pressHandler,
      toggler,
      deleteConfirm,
      deleteConfirmOn,
      deleteConfirmOff
    } = this.props;

      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modal.isOpen}
          onRequestClose={() => {toggler(false)}}
        >
          <TouchableWithoutFeedback
            onPress={deleteConfirmOff}
          >
            <View style={[styles.container, styles.modalBackground]}>
              <View style={styles.innerContainer}>
                <Image
                  style={styles.modalImage}
                  source={{uri: modal.item.img}}
                />
                <Text style={styles.innerContainerText}>
                  {modal.item.content}
                </Text>
                <TouchableOpacity
                  onPress={this.handleClick.bind(this)}>
                  <View style={styles.modalButton}>
                    <Text style={styles.buttonText}>Open in browser</Text>
                  </View>
                </TouchableOpacity>
                {deleteConfirm ?
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={pressHandler.bind(null, modal.item)}
                    underlayColor='black'
                  >
                    <Text style={styles.buttonErrorText}>
                      Are you sure?
                    </Text>
                  </TouchableOpacity> :
                    <TouchableOpacity
                      style={styles.modalButton}
                      onPress={deleteConfirmOn}
                      underlayColor='black'
                    >
                      <Text style={styles.buttonText}>
                        Delete item from the list
                      </Text>
                    </TouchableOpacity>
                  }
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={toggler.bind(null, false)}
                    underlayColor='black'
                  >
                    <Text style={styles.buttonText}>
                      Close Modal Screen
                    </Text>
                  </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        );
    // }
  }
}
