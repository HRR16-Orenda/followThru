import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes.js';
import { Router } from 'react-router';
import { connect } from 'react-redux';
// import * as actions from '../actions/index.js';

class RootComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Uncomment Once authentication Implemented
    // this.props.attemptVerify();
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptVerify: () => {
      // let token = window.localStorage.getItem('jwtToken');
      //
      // // If there is no token, do nothing
      // if(!token || token === '') {
      //   return;
      // }
      // dispatch(actions.attemptVerify(token));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    // token: state.auth.token
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
