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
  wrapper: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#F5FCFF',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch'
  },

  /*********************************
  Add Screen Specific Styles
  *********************************/
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 20
  },

  autocompleteInputContainer: {
    borderRadius:2
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: '#F5FCFF',
    top: 190,
  },

  mainButton: {
    height: 60,
    width: 80,
    position: 'relative',
    backgroundColor: '#ffffff',
    // borderColor: '#000000',
    // borderWidth: 1,
    borderRadius: 2,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  mainButtonItemAdded: {
    height: 60,
    width: 80,
    position: 'relative',
    backgroundColor: '#00d9a3',
    // borderColor: '#000000',
    // borderWidth: 1,
    borderRadius: 2,
    marginBottom: 20,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },

  buttonCategoryText: {
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    // position: 'relative',
    // marginBottom: 20
  },


  /**********************************
  Icon Swipe Description Feature
  **********************************/

  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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
    // marginTop: 60,
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
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#ffffff'
  },

  signUpPrompt: {
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0)',
    color: '#ffffff'
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
    height: 30,
    width: 200,
    padding: 4,
    flex: 4,
    fontSize: 14,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,.2)',
    color: '#ffffff'
  },
  loginButton: {
    height: 30,
    width: 200,
    padding: 4,
    flex: 4,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  loginText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
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
  error: {
    marginBottom: 20,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
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
  disabledButton: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  },
  buttonErrorText: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  },
  icon: {
    height: 25,
    width: 25
  },

  /*********************************
  List Screen Specific Styles
  *********************************/
  innerContainer: {
    alignItems: 'center'
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainerTransparent: {
    backgroundColor: '#fff',
    padding: 20
  },
  innerContainerText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'gray'
  },
  modalButton: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  modalImage: {
    width: 200,
    height: 280,
    marginBottom: 20
  },
  datePicker: {
    backgroundColor: 'white',
    borderRadius:15
  },

  /*********************************
  follower Screen Specific Styles
  *********************************/
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryButton: {
    flex: 1,
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 2,
    marginRight: 2,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  signUpButtonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 10,
    marginBottom: 10,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  followContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  followIcon: {
    flex:1
  },
  followInfo: {
    flex: 4
  }
});
