import React from 'react';
import { expect } from 'chai';

import authReducer from '../../../client-ios/reducers/authReducer';
import listReducer from '../../../client-ios/reducers/listReducer';
import routeReducer from '../../../client-ios/reducers/routeReducer';

import * as types from '../../../client-ios/constants/ActionTypes';

describe('Reducers', () => {

  describe('authReducer', () => {
    it('should handle an login success', () => {
      const action = {
        type: 'LOGIN_SUCCESS',
        isFetching: true,
        isAuthenticated: true,
        user: {
          username: 'Max'
        }
      };

      const state = authReducer({
        user: {},
        isFetching: false,
        isAuthenticated: false,
      }, action);
      expect(state.isAuthenticated).to.eql(action.isAuthenticated);
    });
  });

  describe('listReducer', () => {
    it('should update the user input', () => {
      const action = {
        type: 'UPDATE_USER_INPUT',
        inputData: 'Mad Max'
      };

      const state = listReducer({userInput: ''}, action);
      expect(state.userInput).to.eql(action.inputData);
    });
  });

  describe('routeReducer', () => {
    it('should update the scene', () => {
      const action = {
        type: 'focus',
        scene: 'addScreen'
      };

      const state = routeReducer({scene: {}}, action);
      expect(state.scene).to.eql(action.scene);
    });
  });

})
