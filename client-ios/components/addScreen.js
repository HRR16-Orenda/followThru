// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';
import Footer from './footer.js';
import CategoryPicker from './categoryPicker.js';

// TODO remove this?
// import InputBox from './inputBox.js';


export default class AddScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={{marginTop: 100, alignSelf: "center"}}>What would you like to add?</Text>
          <TextInput
            style = {{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginLeft: 20, marginRight: 20}}
            autoFocus={true}
            onChangeText={(text) => this.props.userTypeStart({text})}
            //onSubmitEditing={(text) => this.props.userTypeEnd({text})}
            onSubmitEditing={(text) => Actions.actionConfirmationScreen()}

          />



        <View style={styles.container}>
          <Footer />
        </View>
      </View>
    );
  }
}
          // {this.props.isUserTyping ? <CategoryPicker /> : null}

var styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF'
   },
   inputBox: {
     flex: 1,
     height: 30
   }
});
