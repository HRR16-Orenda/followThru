import { expect } from 'chai';

import * as actions from '../../../client-ios/actions/index';
import * as types from '../../../client-ios/constants/ActionTypes';

describe ('followthru actions', () => {
	it ('toggleCheck should create TOGGLE_CHECK action', () => {
		expect(actions.toggleCheck()).toEqual({
			type: 'TOGGLE_CHECK'
		});
	});

	it ('addItemLocally should create ADD_ITEM_LOCALLY action', () => {
		expect(actions.searchLocation('Buy eggs')).toEqual({
			type: 'ADD_ITEM_LOCALLY',
			payload: 'Buy eggs'
		});
	});

	it ('clearInputAfterSubmit should create CLEAR_INPUT_AFTER_SUBMIT action', () => {
		expect(actions.clearInputAfterSubmit()).toEqual({
			type: 'CLEAR_INPUT_AFTER_SUBMIT'
		});
	});

	it ('deleteListItemDatabaseRequest should create DELETE_LIST_ITEM_DATABASE_REQUEST action', () => {
		expect(actions.deleteListItemDatabaseRequest()).toEqual({
			type: 'DELETE_LIST_ITEM_DATABASE_REQUEST',
			yelpData: {data: "goes here"}
		});
	});
});
