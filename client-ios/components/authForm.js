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
import Error from './errorMsg.js';
import styles from '../styles/styles.js';

class AuthFormComponent extends Component {
  props: {
    formType: number
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
            autoCapitalize='none'
            {...fields.username}
            placeholder='username'
          />
        </View>
        {fields.username.touched && fields.username.error &&
          <Error error={fields.username.error} />
        }
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.password}
            secureTextEntry={true}
            autoCapitalize='none'
            placeholder='password'
          />
        </View>
        {fields.password.touched && fields.password.error &&
          <Error error={fields.password.error} />
        }
        <TouchableHighlight
          style={styles.inputField}
          onPress={handleSubmit}
          underlayColor='#99d9f4'
        >
          <Text style={styles.buttonText}>
            Login
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
            autoCapitalize='none'
            {...fields.username}
            placeholder='Username'
          />
        </View>
        {fields.username.touched && fields.username.error &&
          <Error error={fields.username.error} />
        }
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            autoCapitalize='none'
            {...fields.email}
            placeholder='Email'
          />
        </View>
        {fields.email.touched && fields.email.error &&
          <Error error={fields.email.error} />
        }
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.password}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Password'
          />
        </View>
        {fields.password.touched && fields.password.error &&
          <Error error={fields.password.error} />
        }
        <View style={styles.flowRight}>
          <TextInput
            style={styles.inputField}
            {...fields.confirm}
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder='Confirm your Password'
          />
        </View>
        {fields.confirm.touched && fields.confirm.error &&
          <Error error={fields.confirm.error} />
        }
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
