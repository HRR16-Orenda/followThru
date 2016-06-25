import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  }
});
