// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const adding = !(this.props.userInput.length === 0);

    return (
      <View style={this.props.isKeyboardShowing ? styles.buttonContainerWithKeyboard : styles.buttonContainerWithoutKeyboard} >
        <View>
          <TouchableOpacity
            style={(this.props.filter === 'DO' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('DO')}}>
            <Image source={require('../assets/button1.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Clipboard-50-white.png')}
              />
              {(this.props.filter === 'DO' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>DO</Text>}
              </Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'BUY' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('BUY')}}>
            <Image source={require('../assets/button2.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/ShoppingCart-50-white.png')}
              />
              {(this.props.filter === 'BUY' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>BUY</Text>}
              </Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'READ' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('READ')}}>
            <Image source={require('../assets/button3.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Literature-50-white.png')}/>
              {(this.props.filter === 'READ' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>READ</Text>}
            </Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'LISTEN' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('LISTEN')}}>
            <Image source={require('../assets/button4.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Headphones-50-white.png')}
              />
              {(this.props.filter === 'LISTEN' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>LISTEN</Text>}
          </Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'EAT' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('EAT')}}>
            <Image source={require('../assets/button5.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Restaurant-50-white.png')}
              />
              {(this.props.filter === 'EAT' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>EAT</Text>}
            </Image>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'WATCH' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('WATCH')}}>
            <Image source={require('../assets/button6.png')} style={styles.mainButton}>
              <Image
                style={adding ? 'ios-add-outline' : styles.buttonImage}
                style={styles.buttonImage}
                source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Documentary-50-white.png')}/>
            {(this.props.filter === 'WATCH' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>WATCH</Text>}
            </Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
