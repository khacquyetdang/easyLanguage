import React, { Text, Image, View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

//import CheckBox from 'react-native-checkbox';
import AnswerBox from '../AnswerBox.js';


describe('<AnswerBox>', () => {
  beforeEach(function() {
    wrapper = shallow(<AnswerBox></AnswerBox>);
  });
  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });

/*
  it('It should have a image', () => {
    expect(wrapper.find(Image)).to.have.length(1);

  });

  it('It should have a checkbox', () => {
    //expect(wrapper.find(CheckBox)).to.have.length(1);
    expect(false);
  });
*/


});
