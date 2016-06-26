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
        {/*<Image source={{uri: this.props.thumbnail}}
          style={styles.thumbnail} />*/}
        <View style={ styles.rightContainer }>
          {this.props.isItemCrossedOff ?
          <Text style={ styles.listTitleCrossedOff }>{ this.props.itemTitle }</Text>
          :
          <Text style={ styles.listTitle }>{ this.props.itemTitle }</Text>
        }
          {/*{
            if(this.props.subTitle){*/}
            {this.props.isItemCrossedOff ?
              <Text style={ styles.listAuthorCrossedOff }>{ this.props.itemContent }</Text>
              :
              <Text style={ styles.listAuthor }>{ this.props.itemContent }</Text>
            }
            {/*}
          }*/}
        </View>
      </View>
    );
  }
}
