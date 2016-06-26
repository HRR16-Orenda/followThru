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
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  renderForm () {
    const { fields, fieldType } = this.props;
      return _.map(fields[fieldType], (field, key) => {
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
            <View key={key} style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Text style={styles.text}>{key} : </Text>
              <View style={{ borderBottomColor: '#000000', borderBottomWidth: 1}}>
                <TextInput style={styles.inputField} {...field}/>
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
