// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  //1. create submit functionality button during 'add' state
  //2. move pressHandler functionality that assigns category inside new submit function
  //3. places where buttonStyle state change needs to happen:
    //  - default state set to 'mainButton' style
    //  - checking length of user input in input box (change to 'add' style)
    //  - onPress of add (change to 'checked' style for specific button)
    //  - within the delay function inside onPress function (changes back to regular)

  render() {

    const adding = !(this.props.userInput.length === 0);
    const buttons = this.props.buttons.map((button, index) => {
      return (
        <View key={button.icon}>
          <TouchableHighlight style={styles.mainButton}>
            <Icon
              name={adding ? 'ios-add-outline' : button.icon}
              size={50}
              onPress={() => {this.props.mainButtonPressed(button.category)}}
            />
          </TouchableHighlight>
          {(this.props.filter === button.category && this.props.saved) ? <Text>Added!</Text> : null}
          {adding ? <Text>{button.category}</Text> : null}
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
