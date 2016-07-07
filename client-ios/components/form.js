// @flow

import React, { Component } from "react";
import _ from 'lodash';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles.js';

import * as actions from '../actions/index.js';

import Autocomplete from 'react-native-autocomplete-input';

class FormComponent extends Component {

  constructor(props){
    super(props);
  }


  render () {
    return (
      <View style={styles.formContainer}>
        <Autocomplete
          containerStyle={this.props.isKeyboardShowing ? styles.autocompleteContainerWithKeyboard : styles.autocompleteContainerWithoutKeyboard}
          inputContainerStyle={styles.autocompleteInputContainer}
          value={this.props.userInput}
          placeholder={"What would you like to add?"}
          data = {this.props.suggestions}
          renderItem={(itemData) => (
            <TouchableOpacity onPress={() => this.props.updateInputWithSuggestion(itemData)}>
              <Text style={styles.autocompleteSuggestionText}>{itemData}</Text>
            </TouchableOpacity>
          )}
          onChangeText={(text) => {
            this.props.queryWikipedia(text);
            this.props.updateUserInput(text);
          }}
          clearButtonMode={'while-editing'}
        />
      </View>
    )
  }
}

export default FormComponent;
