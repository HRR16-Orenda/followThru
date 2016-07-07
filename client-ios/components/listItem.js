//@flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles.js'

export default class ListItem extends Component {
  constructor( props ){
    super( props );
  };

  render() {
    return (
      <View style={ styles.listContainer }>
        {this.props.itemImage && !this.props.completed ?
          <Image source={{uri: this.props.itemImage}}
          style={this.props.filter === "LISTEN" ? styles.musicThumbnail : styles.thumbnail} />
          :
          null
        }
        <View style={ styles.rightContainer }>
          {this.props.completed ?
            <Text style={ styles.listTitleCrossedOff }>{ this.props.itemTitle }</Text>
            :
              <Text style={ styles.listTitle }>{ this.props.itemTitle }</Text>
          }
          {this.props.completed ?
            null
            :
            <Text style={ styles.listAuthor }>{ this.props.itemContent }</Text>
            }
        </View>
        {this.props.itemTitle ?
          <Image source={require('../assets/Forward-50.png')}
          style={styles.rightArrow} />
          :
          null
        }
      </View>
    );
  }
}
