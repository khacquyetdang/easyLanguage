import React, { Text, Image, View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TestVocabularyScreen from '../TestVocabularyScreen.js';

import AnswerBox from '../../components/AnswerBox.js';


describe('<TestVocabularyScreen>', () => {
  beforeEach(function() {
    wrapper = shallow(<TestVocabularyScreen></TestVocabularyScreen>);
  });

  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });


  it('It should have a Text with question ', () => {
    expect(wrapper.contains(<Text style={{
      fontWeight : 'bold',
      fontSize: 25
    }}>
      {'Choisir l\'image correspondant à \"Con khỉ\"'}
    </Text>)).to.equal(true);
  });

  it('It should have at least 4 AnswerBox ', () => {
    expect(wrapper.find(AnswerBox)).to.have.length(4);
  });
});
