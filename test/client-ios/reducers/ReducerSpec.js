import React from 'react';
import { expect } from 'chai';

import authReducer from '../../../client-ios/reducers/authReducer';
import listReducer from '../../../client-ios/reducers/listReducer';
import routeReducer from '../../../client-ios/reducers/routeReducer';

import * as types from '../../../client-ios/constants/ActionTypes';

describe('Reducers', () => {

  describe('authReducer', () => {
    it('should handle a login success', () => {
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

    it('should handle a login failure', () => {
      const action = {
        type: 'LOGIN_FAILURE',
        isFetching: true,
        isAuthenticated: false,
        errorMessage: 'User not found'
      };

      const state = authReducer({
        isFetching: false,
        isAuthenticated: false,
        errorMessage: ''
      }, action);
      expect(state.isAuthenticated).to.eql(action.isAuthenticated);
    });

    it('should handle a signup success', () => {
      const action = {
        type: 'SIGNUP_SUCCESS',
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

    it('should handle a signup failure', () => {
      const action = {
        type: 'SIGNUP_FAILURE',
        isFetching: true,
        isAuthenticated: false,
        errorMessage: 'Username taken'
      };

      const state = authReducer({
        isFetching: false,
        isAuthenticated: false,
        errorMessage: ''
      }, action);
      expect(state.isAuthenticated).to.eql(action.isAuthenticated);
    });

    it('should handle a logout success', () => {
      const action = {
        type: 'LOGOUT_SUCCESS',
        isFetching: true,
        isAuthenticated: false,
      };

      const state = authReducer({
        user: {},
        isFetching: false,
        isAuthenticated: true,
      }, action);
      expect(state.isAuthenticated).to.eql(action.isAuthenticated);
    });

    it('should handle a logout failure', () => {
      const action = {
        type: 'LOGIN_FAILURE',
        isFetching: true,
        isAuthenticated: false,
        errorMessage: 'Could not logout'
      };

      const state = authReducer({
        user: {},
        isFetching: false,
        isAuthenticated: false,
        errorMessage: ''
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

    it('should update suggestions with new options', () => {
      const action = {
        type: 'UPDATE_SEARCH_SUGGESTIONS_SUCCESS',
        suggestions: ['Mad Max: Fury Road', 'Mad Max']
      };

      const state = listReducer({suggestions: []}, action);
      expect(state.suggestions).to.eql(action.suggestions);
    });

    it('should toggle check', () => {
      const action = {
        type: 'TOGGLE_CHECK',
        checked: false
      };

      const state = listReducer({checked: true}, action);
      expect(state.checked).to.eql(action.checked);
    });

    it('should update the filter', () => {
      const action = {
        type: 'UPDATE_FILTER_STATE',
        filter: 'Movies'
      };

      const state = listReducer({filter: ''}, action);
      expect(state.filter).to.eql(action.filter);
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
