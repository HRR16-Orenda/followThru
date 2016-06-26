// @flow

import React, { Component } from "react";
import _ from 'lodash';

import {
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from '../styles/styles.js';

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

  renderForm () {
    const { fields, fieldType, detailFields } = this.props;
      return _.map(detailFields, (field, i) => {
        // if(key === 'isAdmin') {
        //   return (
        //     <View key={key} style={{borderColor: 'red', borderWidth: 1}}>
        //       <TextInput style={styles.inputField} {...field}/>
        //     </View>
        //   )
        // } else if(key === 'completed') {
        //   return (
        //     <View key={key} style={{borderColor: 'red', borderWidth: 1}}>
        //       <TextInput style={styles.inputField} {...field}/>
        //     </View>
        //   )
        // } else {
          return (
            <View key={i} style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Text style={styles.text}>{field.toUpperCase()} : </Text>
              <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1}}>
                <TextInput style={styles.inputField} {...fields[fieldType][detailFields]}/>
              </View>
            </View>
          )
        // }
      })
  }

  render () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid
    } = this.props;
    return (
      <View style={styles.formContainer}>
        {this.renderForm()}
        <TouchableHighlight style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>
            Submit
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default FormComponent;
