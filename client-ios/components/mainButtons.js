// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const adding = !(this.props.userInput.length === 0);
    const buttons = this.props.buttons.map((button, index) => {
      return (
        <View key={button.icon}>
          <TouchableOpacity
            style={(this.props.filter === button.category && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed(button.category)}}
          >
            <Icon
              name={adding ? 'ios-add-outline' : button.icon}
              size={45}
            />
            {(this.props.filter === button.category && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>{button.category}</Text>}
          </TouchableOpacity>
        </View>
      )
    });

    return (
      <View style={styles.buttonContainer} >
        {buttons}
      </View>
    );
  }
}
