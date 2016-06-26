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

export default class ActionConfirmationScreen extends Component {
  constructor(props) {
    super(props);
  }

  pressHandler(data) {
    const { fields, userCategorySelected, destroyForm } = this.props;

    // manually set category form field with given argument
    fields.item.category.onChange(data);
    userCategorySelected(data);

    // manually destroy value of form field
    destroyForm('general');
  }

  render() {
    const { fields } = this.props;
    console.log('title', this.props);
    return (

      <View style={styles.container}>
        {this.props.toggleShow ?
          <View>
            <Text style={styles.text}>Add to...</Text>
            <View style={styles.categoryPicker}>
              <TouchableHighlight style={styles.button} onPress={this.pressHandler.bind(this, 'Books')}>
                <Text style={styles.buttonText}>Book</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.pressHandler.bind(this, 'Movies')}>
                <Text style={styles.buttonText}>Movies</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button} onPress={this.pressHandler.bind(this, 'Music')}>
                <Text style={styles.buttonText}>Music</Text>
              </TouchableHighlight>
            </View>
          </View>
          :
            <View>
              <Image source={{uri:'http://cliparts.co/cliparts/pio/dBR/piodBRjiE.png'}} style={styles.checkmark} />
              <Text style={styles.text}>
                Your item '{this.props.userInput}' has been added to {this.props.category}
              </Text>
            </View>
        }
      </View>
    );
  }
}
