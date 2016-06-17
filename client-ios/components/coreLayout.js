/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * THESIS START FROM HERE!!!!!!!!!!
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Footer from './footer.js';
import styles from '../styles/styles.js';

export default class Orenda extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text>
            touch it!
          </Text>
        </TouchableHighlight>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          //value={'Hey SB!'}
        />
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Footer />
      </View>
    );
  }
}
