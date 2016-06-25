import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import Footer from '../components/footer.js';

import { Actions } from 'react-native-router-flux';

const mapDispatchToProps = (dispatch) => {
  return {
    selectTab: (tab) => {
      dispatch(actions.selectTab(tab));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    tabSelected: state.lists.tabSelected
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
