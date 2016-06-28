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

  pressHandler(data) {
    const { fields, addItem, resetForm } = this.props;

    // manually set category form field with given argument
    fields.item.category.onChange(data);
    let item = {
      title: fields.item.title.value,
      category: data
    };
    addItem(item);
    // userCategorySelected(data);
    // manually resetForm value of form field
    resetForm('general');

    //FUNCTION THAT SET-TIMEOUTS BUTTON TO BE A CHECK
  }
  //1. create submit functionality button during 'add' state
  //2. move pressHandler functionality that assigns category inside new submit function
  //3. places where buttonStyle state change needs to happen:
    //  - default state set to 'mainButton' style
    //  - checking length of user input in input box (change to 'add' style)
    //  - onPress of add (change to 'checked' style)
    //  - within the delay function inside onPress function (changes back to regular)

  render() {
    const {
      fields,
      handleSubmit
    } = this.props;
    const adding = !(fields.item.title.value.length === 0);
    const buttons = this.props.buttons.map((threeButtons) => {
      return (
        <View style={styles.buttonContainer}>
          {threeButtons.map((button) => {
            return (
              // {adding ? <Text>{button.category}</Text> : null}
              <TouchableHighlight style={ buttonStyle }>
              <Icon
                name={adding ? 'ios-add-outline' : button.icon}
                style={styles.icon}
                onPress={() => {this.pressHandler.bind(this, button.category)}}
              />
              </TouchableHighlight>
            );
          })}
        </View>
      )
    });

    return (
      <View >
        {buttons}
      </View>
    );
  }
  // render() {
  //   const {
  //     fields,
  //     handleSubmit
  //   } = this.props;
  //   const adding = !(fields.item.title.value.length === 0);
  //   const buttons = this.props.buttons.map((threeButtons) => {
  //     return (
  //       <View style={styles.buttonContainer}>
  //         {threeButtons.map((button) => {
  //           return (
  //             // {adding ? <Text>{button.category}</Text> : null}
  //             <TouchableHighlight style={ adding ? styles.mainButton_add : styles.mainButton }>
  //             <Icon
  //               name={adding ? 'ios-add-outline' : button.icon}
  //               style={styles.icon}
  //               onPress={() => {this.pressHandler.bind(this, button.category)}}
  //             />
  //             </TouchableHighlight>
  //           );
  //         })}
  //       </View>
  //     )
  //   });
  //
  //   return (
  //     <View >
  //       {buttons}
  //     </View>
  //   );
  // }

  // render() {
  //   const { fields } = this.props;
  //   return (
  //
  //     <View>
  //       <View style={styles.buttonContainer}>
  //         <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-list-box-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'ToDos')}} />
  //         </TouchableHighlight>
  //         <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-cart-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'Groceries')}} />
  //         </TouchableHighlight>
  //         <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-musical-notes-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'Music')}} />
  //         </TouchableHighlight>
  //       </View>
  //       <View style={styles.buttonContainer}>
  //       <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-headset-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'Movies')}} />
  //         </TouchableHighlight>
  //         <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-restaurant-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'Restaurants')}} />
  //         </TouchableHighlight>
  //         <TouchableHighlight style={fields.item.title.value.length === 0 ? styles.mainButton : styles.mainButton_add}>
  //           <Icon name={fields.item.title.value.length === 0 ? 'ios-star-outline' : 'ios-add-outline'} style={styles.icon} onPress={() => {this.pressHandler.bind(this, 'Custom')}} />
  //         </TouchableHighlight>
  //       </View>
  //     </View>
  //   );
  // }
  }
