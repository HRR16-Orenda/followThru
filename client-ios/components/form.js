// @flow

import React, { Component } from "react";
import _ from 'lodash';

import {
  TextInput,
  TouchableHighlight,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles.js';

import * as actions from '../actions/index.js';

import Autocomplete from 'react-native-autocomplete-input';

class FormComponent extends Component {
  props: {
    detailFields: Array<string>,
    fieldType: string
  };

  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  renderGeneralForm () {
    const { fields, fieldType, detailFields } = this.props;
    // fields.item.title.value to get that field data

      return _.map(detailFields, (field, i) => {
        return (
          <View key={i} style={styles.flowRight}>
            <Autocomplete
              //containerStyle={styles.inputField}
              {...fields[fieldType][detailFields]}
              value={this.props.userInput || fields.item.title.value}
              placeholder={field}
              data = {this.props.suggestions}
              renderItem={(itemData) => (
                <TouchableOpacity onPress={() => this.props.updateInputWithSuggestion(itemData)}>
                  <Text>{itemData}</Text>
                </TouchableOpacity>
              )}
              onChangeText={(text) => {
                this.props.queryWikipedia(text);
                this.props.updateUserInput(text);
              }}
              //onChange={(event) => {
              //  console.log('here is the event ***** ', event)
              //  // fields.onChange(event);
              //}}
            />
          </View>
        )
      })
  }

  render () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid,
      fieldType,
      detailFields
    } = this.props;
    return (
      <View style={styles.formContainer}>
        {this.renderGeneralForm()}
        <TouchableHighlight
          style={styles.button}
          onPress={handleSubmit}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}



export default FormComponent;
