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
import LinearGradient from 'react-native-linear-gradient';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const adding = !(this.props.userInput.length === 0);


    return (
      <View style={styles.buttonContainer} >
        <View>
          <LinearGradient colors={['#4ee3d0', '#06bbea', '#0559f7']} style={styles.linearGradient}>
          <TouchableOpacity
            style={(this.props.filter === 'DO' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('DO')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Clipboard-50-white.png')}
            />
            {(this.props.filter === 'DO' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>DO</Text>}
          </TouchableOpacity>
          </LinearGradient>
        </View>

        <View>
        <LinearGradient colors={['#e6c169', '#fea24b', '#f96d30']} style={styles.linearGradient}>


          <TouchableOpacity
            style={(this.props.filter === 'BUY' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('BUY')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/ShoppingCart-50-white.png')}
            />
            {(this.props.filter === 'BUY' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>BUY</Text>}
          </TouchableOpacity>
          </LinearGradient>

        </View>

        <View>
        <LinearGradient colors={['#f1f23d', '#89eb92', '#31eae2']} style={styles.linearGradient}>


          <TouchableOpacity
            style={(this.props.filter === 'READ' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('READ')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Literature-50-white.png')}
            />
            {(this.props.filter === 'READ' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>READ</Text>}
          </TouchableOpacity>
          </LinearGradient>

        </View>

        <View>
        <LinearGradient colors={['#ff4c93', '#ff5965', '#fe653c']} style={styles.linearGradient}>

          <TouchableOpacity
            style={(this.props.filter === 'LISTEN' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('LISTEN')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') : require('../assets/Headphones-50-white.png')}
            />
            {(this.props.filter === 'LISTEN' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>LISTEN</Text>}
          </TouchableOpacity>
          </LinearGradient>

        </View>

        <View>
        <LinearGradient colors={['#ea1c95', '#a31296', '#5e0897']} style={styles.linearGradient}>



          <TouchableOpacity
            style={(this.props.filter === 'EAT' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('EAT')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Restaurant-50-white.png')}
            />
            {(this.props.filter === 'EAT' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>EAT</Text>}
          </TouchableOpacity>
          </LinearGradient>

        </View>

        <View>
        <LinearGradient colors={['#f7ac53', '#f46185', '#c43d91']} style={styles.linearGradient}>


          <TouchableOpacity
            style={(this.props.filter === 'WATCH' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('WATCH')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50-white.png') :require('../assets/Documentary-50-white.png')}
            />
            {(this.props.filter === 'WATCH' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>WATCH</Text>}
          </TouchableOpacity>
          </LinearGradient>

        </View>
      </View>
    );
  }
}
