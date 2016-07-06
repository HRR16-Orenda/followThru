import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AddScreen from '../../../client-ios/components/addScreen';
import Form from '../../../client-ios/components/form';
import mainButtons from '../../../client-ios/components/mainButtons';
import SingleListScreen from '../../../client-ios/components/singleListScreen';

import ListItem from '../../../client-ios/components/ListItem';

// Problem with using redux is the wrapper is looking for Connect(Form) rather than just Form so it won't find it
describe('<ListItem />', () => {
  it('should render the list item', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper.length).to.equal(1);
    // expect(wrapper.find(mainButtons)).to.have.length(1);
    // expect(wrapper.contains(<Form />)).to.equal(true);
  });
});


// // describe('<SingleListScreen />', () => {
// //   it('should render stuff', () => {
// //     const wrapper = shallow(<SingleListScreen />);
// //     expect(wrapper.length).to.equal(1);
// //   });
// // });
