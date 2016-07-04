import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

// import * as actions from '../../client-ios/actions/index';
// import * as types from '../../client-ios/constants/ActionTypes';

import ErrorMsgComponent from '../../../client-ios/components/errorMsg';
// import FormComponent from '../../client-ios/components/form';

describe('<ErrorMsgComponent />', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<ErrorMsgComponent />);
    console.log('****** the wrapper ', wrapper);
    expect(wrapper.length).to.equal(1);
    // expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
  });
});

// describe('<FormComponent />', () => {
//   it('should render stuff', () => {
//     const wrapper = shallow(<FormComponent />);
//     console.log('****** the wrapper ', wrapper);
//     expect(wrapper.length).to.equal(1);
//     // expect(wrapper.contains(<Text>I wonder if there will be any problems...</Text>)).to.equal(true);
//   });
// });
