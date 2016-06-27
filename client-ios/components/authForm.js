// @flow

import React, { Component } from "react";
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';

import {
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from '../styles/styles.js';

class AuthFormComponent extends Component {
  props: {
    formType: string
  };

  constructor(props){
    super(props);
  }

  renderLoginForm () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid,
      formType
    } = this.props;
    return (
      <View style={styles.formContainer}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.username}
            placeholder='Username'
          />
        </View>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.password}
            secureTextEntry={true}
            placeholder='Password'
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={handleSubmit}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => Actions.signupScreen()}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>
            Signup
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  renderSignupForm () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid,
      formType
    } = this.props;
    return (
      <View style={styles.formContainer}>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.username}
            placeholder='Username'
          />
        </View>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.email}
            placeholder='Email'
          />
        </View>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.password}
            secureTextEntry={true}
            placeholder='Password'
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={handleSubmit}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>
            Signup
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render () {
    const { formType } = this.props;
    return (
      <View style={styles.wrapper}>
        {formType === 'signup' ? this.renderSignupForm() : null}
        {formType === 'login' ? this.renderLoginForm() : null}
      </View>
    )
  }
}

export default AuthFormComponent;
