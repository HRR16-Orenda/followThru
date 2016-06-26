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
  Action confirmation Specific Styles
  *********************************/
  actionConfirm: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  checkmark: {
    marginTop: 100,
    marginBottom: 20,
    width: 160,
    height: 160,
    alignSelf: "center",
    backgroundColor: 'transparent'
  },
  categoryPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    height: 36,
    padding: 4,
    flex: 4,
    fontSize: 18,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },

  /*********************************
  Typograph Specific Styles
  *********************************/
  text: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    alignSelf: 'center'
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },

  /*********************************
  Button Common Styles
  *********************************/
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});
