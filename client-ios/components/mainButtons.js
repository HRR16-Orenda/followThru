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
          <TouchableOpacity 
            style={styles.mainButton}
            onPress={() => {this.props.mainButtonPressed(button.category)}}
          >
            <Icon
              name={adding ? 'ios-add-outline' : button.icon}
              size={30}
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
