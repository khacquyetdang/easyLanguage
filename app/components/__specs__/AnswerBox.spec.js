import React, { Text, Image, View, TouchableOpacity
 } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import AnswerBox from '../AnswerBox.js';
import TestVocabularyScreen from '../../screens/TestVocabularyScreen.js';


describe('<AnswerBox>', () => {
  beforeEach(function() {
    imageSourceCoq = "../../../image/animal/coq.jpg";
    wrapper = shallow(<AnswerBox imageSource={imageSourceCoq}></AnswerBox>);
  });

  it('should be a TouchableOpacity component', () => {
    expect(wrapper.type()).to.equal(TouchableOpacity);
  });


  it('It should have a image', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('should have a TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });

  it('It should have a image with source', () => {
    expect(wrapper.find(Image).props().source).to.equal(imageSourceCoq);
  });

  it('It should handle onImageClick method of TestVocabularyScreen with answer id', () => {
    sinon.stub(TestVocabularyScreen.prototype, "answerClicked");

    const wrapper = shallow(<AnswerBox
      id={1}
      imageSource={imageSourceCoq}
      onAnswerSubmit={TestVocabularyScreen.prototype.answerClicked}/>);
    const submitBtn = wrapper.find('TouchableOpacity').first();

    submitBtn.simulate('press');
    expect(TestVocabularyScreen.prototype.answerClicked.calledWith(1)).to.be.true;
    TestVocabularyScreen.prototype.answerClicked.restore();
  });

});
