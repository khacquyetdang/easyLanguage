import React, { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AnswerBox from '../AnswerBox.js';


describe('<AnswerBox>', () => {
  it('should be a view component', () => {
  const wrapper = shallow(<AnswerBox></AnswerBox>);
    expect(wrapper.type()).to.equal(View);
  });

});
