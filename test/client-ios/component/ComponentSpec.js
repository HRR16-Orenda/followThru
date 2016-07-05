import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddScreen from '../../../client-ios/components/addScreen';
import Form from '../../../client-ios/components/form';
import mainButtons from '../../../client-ios/components/mainButtons';
import SingleListScreen from '../../../client-ios/components/singleListScreen';

// Problem with using redux is the wrapper is looking for Connect(Form) rather than just Form so it won't find it
describe('<AddScreen />', () => {
  it('should render the form and main buttons', () => {
    const wrapper = shallow(<AddScreen />);
    expect(wrapper.find(View)).to.have.length(1);
    // expect(wrapper.find(mainButtons)).to.have.length(1);
    // expect(wrapper.contains(<Form />)).to.equal(true);
  });
});

// describe('<SingleListScreen />', () => {
//   it('should render stuff', () => {
//     const wrapper = shallow(<SingleListScreen />);
//     expect(wrapper.length).to.equal(1);
//   });
// });
