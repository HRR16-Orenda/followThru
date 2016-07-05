import { ListView } from 'react-native';

export function loginUser( creds ) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    dispatch( requestLogin( creds  ))
//need to create this API endpoint in the server.  Also, is this
//how you make a REST call on a native device? refer to the Auth0
//example for reference
    return fetch('http://localhost:3001/api/auth', config)
      .then(response =>
        response.json()
        .then( user => ({ user, response })))
        .then(({ user, response }) => {
          if (!response.ok) {
            dispatch(loginError(user.message))
            return Promise.reject(user)
          } else {
//*********>>>  need to store this in AsyncStorage
            dispatch(receiveLogin(user))
          }
        }).catch(err => console.log("Error: ", err))
  }

}

export const generateDataSource = (list = []) => {
  let inputList = list.slice();

  let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
  }).cloneWithRows(inputList);

  return dataSource;
}
