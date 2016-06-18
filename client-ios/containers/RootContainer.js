// @flow
import { connect } from 'react-redux'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import {bindActionCreators} from 'redux';
import React, { Component } from 'react';
import RootComponent from '../components/coreLayout.js';

// Import screens
import AddScreen from '../components/addScreen.js';
// import ListScreen from '../components/listScreen.js';

class RootContainer extends Component {

	constructor(props) {
    	super(props);
    }

    render() {
		// const { state, actions } = this.props;
		// console.log("Props", this.props, state, actions); // everything ok here

        return (
          <Router>
            <Scene key="modal" component={Modal} >
              <Scene key="root">
                <Scene key="addScreen" component={AddScreen} title="Add Screen" initial={true} tabs={true}/>

              </Scene>
            </Scene>
          </Router>
        )
    }
}

export default connect()(RootContainer);
