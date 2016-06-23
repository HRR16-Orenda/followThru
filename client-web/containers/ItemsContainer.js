import { connect } from 'react-redux';
import ItemsComponent from '../components/ItemsComponent.js';
import * as actions from '../actions/ActionCreator.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => {
      dispatch(actions.fetchItem());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.lists.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);
