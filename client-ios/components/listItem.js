//@flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles.js'

export default class ListItem extends Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <Image source={{uri: this.props.item.volumeInfo.imageLinks.thumbnail}}
          style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.listTitle}>{this.props.item.volumeInfo.title}</Text>
          <Text style={styles.listAuthor}>{this.props.item.volumeInfo.authors}</Text>
        </View>
      </View>
    );
  }
}
