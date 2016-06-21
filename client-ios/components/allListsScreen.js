// @flow

import React, { Component } from "react";
import {
  TouchableHighlight,
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';
// import styles from '../styles/styles.js';
// import Header from './header.js';
import { Actions } from 'react-native-router-flux';
import Footer from './footer.js';
import ListItem from './listItem.js';
import styles from '../styles/styles.js'

var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';

export default class AllListsScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }

  constructor(props) {
    super(props);
    // this.state = {
    //    isLoading: true,
    //    dataSource: new ListView.DataSource({
    //        rowHasChanged: (row1, row2) => row1 !== row2
    //    })
    // };
  }

  componentDidMount() {
    // this.props.fetchUserLists();
    // console.log('hey!!!! these are the ', this.props);
    // this.fetchData();
  }

  // fetchData() {
  //     fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //           dataSource: this.state.dataSource.cloneWithRows(responseData.items),
  //           isLoading: false
  //       });
  //     })
  //     .done();
  //
  //  }
  //
  // renderLoadingView() {
  //   return (
  //     <View style={styles.loading}>
  //       <ActivityIndicatorIOS
  //           size='large'/>
  //       <Text>
  //         Loading books...
  //       </Text>
  //     </View>
  //   );
  // }
  //
  // renderItem(item) {
  //   if(this.state.isLoading) {
  //     return this.renderLoadingView
  //   }
  //   return (
  //     <TouchableHighlight
  //       onPress = {() => {
  //         Actions.singleListScreen();
  //       }}
  //     >
  //       <View>
  //         <ListItem item={ item } />
  //         <View style={styles.separator} />
  //       </View>
  //     </TouchableHighlight>
  //   );
  //   }

testFunc() {
  this.props.fetchUserLists()
}
    render() {
      return (
        <View style={styles.container}>
          <Text style={{margin: 128}}>hey</Text>
          <Text style={{margin: 128}}>{this.props.lists}</Text>
          <TouchableHighlight style={{margin: 10}} onPress = {() => {this.testFunc()}}>
            <Text>Book</Text>
          </TouchableHighlight>
        </View>
      );
    }
  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <ListView
  //           dataSource={this.state.dataSource}
  //           renderRow={this.renderItem.bind(this)}
  //           style={styles.listView}
  //         />
  //       <View style={styles.container}>
  //         <Footer />
  //       </View>
  //     </View>
  //   );
  // }
}
