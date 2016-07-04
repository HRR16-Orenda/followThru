import React from 'react';
import { expect } from 'chai';

import * as actions from '../../../client-ios/actions/index';
import * as types from '../../../client-ios/constants/ActionTypes';

// const scenesData = (
//   <Scene
//     key="root"
//     component="Modal"
//     getInitialState={() => ({ foo: guid() })}
//   >
//     <Scene key="launch" component="Launch" />
//     <Scene key="sideMenu" component="Drawer" initial>
//       <Scene component="CubeBar" key="cubeBar" type="tabs">
//         <Scene key="main" tabs>
//           <Scene key="home" component="Home" />
//           <Scene key="map" component="Map" />
//           <Scene key="myAccount" component="MyAccount" />
//         </Scene>
//         <Scene key="messaging" initial>
//           <Scene
//             key="conversations"
//             component="Conversations"
//             getInitialState={() => ({ foo: 'what', bar: guid() })}
//           />
//         </Scene>
//       </Scene>
//     </Scene>
//     <Scene key="privacyPolicy" component="PrivacyPolicy" type="modal" />
//     <Scene key="termsOfService" component="TermsOfService" type="modal" />
//     <Scene key="login">
//       <Scene key="loginModal1" component="Login1" />
//       <Scene key="loginModal2" component="Login2" />
//     </Scene>
//   </Scene>);
//
// let scenes;


describe ('followthru actions', () => {
	it ('wahter', () => {
		expect(true).to.eql(true);
	})
	it ('toggleCheck should create TOGGLE_CHECK action', () => {
		expect(actions.toggleCheck()).to.eql({
			type: 'TOGGLE_CHECK'
		});
	});
	//
	// it ('addItemLocally should create ADD_ITEM_LOCALLY action', () => {
	// 	expect(actions.searchLocation('Buy eggs')).toEqual({
	// 		type: 'ADD_ITEM_LOCALLY',
	// 		payload: 'Buy eggs'
	// 	});
	// });
	//
	// it ('clearInputAfterSubmit should create CLEAR_INPUT_AFTER_SUBMIT action', () => {
	// 	expect(actions.clearInputAfterSubmit()).toEqual({
	// 		type: 'CLEAR_INPUT_AFTER_SUBMIT'
	// 	});
	// });
	//
	// it ('deleteListItemDatabaseRequest should create DELETE_LIST_ITEM_DATABASE_REQUEST action', () => {
	// 	expect(actions.deleteListItemDatabaseRequest()).toEqual({
	// 		type: 'DELETE_LIST_ITEM_DATABASE_REQUEST',
	// 		yelpData: {data: "goes here"}
	// 	});
	// });
});
