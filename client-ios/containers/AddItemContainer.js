import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import AddScreen from '../components/addScreen.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
