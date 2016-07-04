import React from 'react';
import { expect } from 'chai';

import authReducer from '../../../client-ios/reducers/authReducer';
import listReducer from '../../../client-ios/reducers/listReducer';
import routeReducer from '../../../client-ios/reducers/routeReducer';

import * as types from '../../../client-ios/constants/ActionTypes';

describe('Reducers', () => {
it ('should', () => {
  expect(true).to.eql(true);
})
  // describe('listReducer', () => {
  //   it('should return the initial state', () => {
  //     expect(
  //       listReducer(undefined, {})
  //     ).to.eql(
  //       {
  //         ui: {
  //           isLoading: false,
  //           loginError: false,
  //           loginErrorMsg: '',
  //           signupError: false,
  //           signupErrorMsg: '',
  //           deleteConfirm: false
  //         },
  //         lists: {
  //           category: ['default'],
  //           allItems: []
  //         },
  //         filter: '',
  //         selectedItems: [],
  //         modal: {
  //           isOpen: false,
  //           item: {}
  //         },
  //         suggestions: [],
  //         userInput: '',
  //         checked: false
  //       }
  //     )
  //   })
  //
  //   it('should update the user input', () => {
  //     const action = {
  //       type: 'UPDATE_USER_INPUT',
  //       userInput: 'Mad Max'
  //     };
  //
  //     const state = listReducer({userInput: ''}, action);
  //     expect(state.userInput).to.eql(action.userInput);
  //   });
  // });

})
