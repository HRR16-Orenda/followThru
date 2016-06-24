import { connect } from 'react-redux';
import ItemsComponent from '../components/ItemsComponent.js';
import * as actions from '../actions/ActionCreator.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => {
      dispatch(actions.fetchItem());
    },
    submitHandler: (data) => {
      console.log('WAWA submitted!!!!', data.item);
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.lists.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);
