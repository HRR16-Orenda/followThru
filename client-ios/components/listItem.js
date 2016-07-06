//@flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';

import styles from '../styles/styles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListItem extends Component {
  constructor( props ){
    super( props );
  };

  render() {
    return (
      <View style={ styles.listContainer }>
        {this.props.itemImage ?
          <Image source={{uri: this.props.itemImage}}
          style={styles.thumbnail} />
          :
          null
        }

        <View style={ styles.rightContainer }>
          {this.props.completed ?
            <Text style={ styles.listTitleCrossedOff }>{ this.props.itemTitle }</Text>
            :
              <Text style={ styles.listTitle }>{ this.props.itemTitle }</Text>
          }
          <Icon name={'ios-arrow-forward-outline'} size={20}/>
          {/*{
          if(this.props.subTitle){*/}
          {this.props.completed ?
              null
              :
              <Text style={ styles.listAuthor }>{ this.props.itemContent }</Text>
            }

        </View>
      </View>
    );
  }
}
