// @flow
import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  TouchableOpacity,
  AlertIOS,
  ActivityIndicatorIOS,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import dismissKeyboard from 'react-native-dismiss-keyboard';

import styles from '../styles/styles.js';
import AuthForm from '../containers/AuthFormContainer.js';

export default class AuthScreen extends Component {

  constructor(props) {
    super(props);
  }

  _userSignup = (creds) => {
      this.props.signupUser(creds);
  }

  _userLogin = (creds) => {
      this.props.loginUser(creds);
  }

  _displayError = (message) => {
    return(
      <View>
        <Text style={ styles.error }>{ message }</Text>
      </View>
    )
  }

  componentWillMount = () => {
    this.props.verifyUserToken();
    Keyboard.addListener('keyboardWillShow', this.props.keyboardIsShowing)
    Keyboard.addListener('keyboardWillHide', this.props.keyboardIsNotShowing)
  }

  componentWillUnmount = () => {
    this.props.resetDisplay();
  }

  render() {
    const {
      isFetching,
      formType,
      isAuthenticated,
      loginError,
      loginErrorMsg,
      signupError,
      signupErrorMsg
    } = this.props;
    let handler = formType === 'signup' ? this._userSignup : this._userLogin;
    let spinner = isFetching ?
      ( <ActivityIndicatorIOS
        hidden='true'
        size='large'/> ) :
      ( <View/> );
    if(!isFetching && !isAuthenticated){
      return (
        <TouchableWithoutFeedback
          onPress={dismissKeyboard}
        >
          <Image source={require('../assets/final2.jpg')} style={styles.image}>

            <View style = {this.props.isKeyboardShowing ? styles.signUpContainerWithKeyboard : styles.signUpContainerWithoutKeyboard}>
              <Text style={ styles.signUpTitle } onPress={() => console.log(this.props)} >followthru</Text>
              { loginError === true && formType === "login" ? this._displayError(loginErrorMsg) : null }
              { signupError === true && formType === "signup" ? this._displayError(signupErrorMsg) : null }
              { spinner }
              <AuthForm formType={formType} onSubmit={handler}/>
            </View>

            {formType === 'login' ?
              <View>
                <Text style={styles.signUpPrompt}>Don't have an account? <Text style={{fontWeight: 'bold'}} onPress={() => this.props.goToSignup()}>Sign Up.</Text></Text>
              </View>
              :
                <View>
                  <Text style={styles.signUpPrompt}>Already have an account? <Text style={{fontWeight: 'bold'}} onPress={() => this.props.goToSignin()}>Sign In.</Text></Text>
                </View>
            }
          </Image>
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <View />
      )
    }
  }
};
