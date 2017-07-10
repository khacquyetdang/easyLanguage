import React, { Text, Image, View, TouchableHighlight
 } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AnswerBox from '../AnswerBox.js';


describe('<AnswerBox>', () => {
  beforeEach(function() {
    imageSourceCoq = "../../../image/animal/coq.jpg";
    wrapper = shallow(<AnswerBox imageSource={imageSourceCoq}></AnswerBox>);
  });

  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });


  it('It should have a image', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('should have a TouchableHighlight', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });

    it('It should have a image with source', () => {
      expect(wrapper.find(Image).props().source).to.equal(imageSourceCoq);
    });

});
