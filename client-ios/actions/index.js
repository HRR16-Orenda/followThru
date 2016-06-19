import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';


//PICK UP HERE! We are defining actions that will be needed on the AllListsScreen
//Will need to create actions for it in ActionTypes.js and finish, update AllListsContainer
//with the actions to pass as props into the allListsScreen which will also need
//to be refactored to use the state and methods passed from Container as props.











export const setMarkerCenter = (pos) => {
  return {
    type: types.SETMARKERCENTER,
    payload: pos
  };
};

export const toggleViewAddNewListingForm = () => {
  return {
    type: types.UI_TOGGLE_VIEW_ADDNEWLISTINGFORM
  };
};

export const addNewListing = (fields) => {
  return (dispatch, getState) => {
    // parse form data for submission
    let newProductListing = {
      ...fields,
      author: getState().user.username,
      locationInfo: {
        address: fields.locationInfo,
        marker: {
          lat: getState().ui.location.marker.lat,
          lng: getState().ui.location.marker.lng
        }
      }
    };

    dispatch(addListingRequest());
    let url = '/products';
    helper.postHelper(url, newProductListing)
    .then(resp => {
      let newItem = resp.data;
      dispatch(addListingSuccess(newItem));
      dispatch(toggleViewAddNewListingForm());
      dispatch(push('/listings'));
    })
    .catch(err => {
      console.error(err);
      dispatch(addListingFailure());
      dispatch(push('/listings'));
    });
  };
};

// Should probably implement products listings state update on each user interaction
export const fetchUpdatedProducts = (id = '') => {
  return dispatch => {
    const url = '/products/' + id;
    helper.getHelper(url)
    .then(resp => {
      var updatedState = resp.data;
      if (resp.status == 200) {
        Array.isArray(updatedState) ? dispatch(updateProductsState(updatedState)) : dispatch(updateProductDetail(updatedState));
      }
    })
    .catch(err => {
      console.error(err);
    });
  };
};
