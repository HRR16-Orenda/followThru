import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /*********************************
  Add Screen Specific Styles
  *********************************/
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  categoryContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },

  /*********************************
  ListView Specific Styles
  *********************************/

  rightContainer: {
      flex: 1
  },
  thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10
  },
  listContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  listTitle: {
      fontSize: 20,
      marginBottom: 8
  },
  listTitleCrossedOff: {
    fontSize: 20,
    marginBottom: 8,
    textDecorationLine: 'line-through'
  },
  listAuthor: {
      color: '#656565'
  },
  listAuthorCrossedOff: {
    color: '#656565',
    textDecorationLine: 'line-through'
  },
  separator: {
       height: 1,
       backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor: '#F5FCFF',
    marginTop: 60,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  /*********************************
  Signup Screen Specific Styles
  *********************************/
  signUpContainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  signUpTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30
  },
  signUpButtonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  signUpButton: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  /*********************************
  Form Specific Styles
  *********************************/
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  inputField: {
    height: 40,
    width: 100,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },

  /*********************************
  Typograph Specific Styles
  *********************************/
  text: {
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Helvetica'
  },

  /*********************************
  Button Common Styles
  *********************************/
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
