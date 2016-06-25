import { connect } from 'react-redux';
import ItemsComponent from '../components/ItemsComponent.js';
import * as actions from '../actions/ActionCreator.js';
import { addItem } from '../actions/ItemAction.js';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => {
      dispatch(actions.fetchItem());
    },
    addItem: (data) => {
      console.log('WAWA submitted!!!!', data.item);
      dispatch(addItem(data.item));
    },
    removeItem: (id: string) => {
      dispatch(actions.removeItem(id))
      console.log('WAWA removsed!s!!!!!');
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.lists.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsComponent);
