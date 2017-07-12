import React, { Text, Image, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import { shallow, mount } from 'enzyme';
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
    expect(wrapper.find(Text).containsMatchingElement(<Text>
      {'Choisir l\'image correspondant à \"Con khỉ\"'}
    </Text>)).to.equal(true);
  });

  it('It should have at least 4 AnswerBox ', () => {
    expect(wrapper.find(AnswerBox)).to.have.length(4);
  });

  it('It should show the red button  with the message wrong answer when i click on the wrong answer ', () => {
    //wrapper.instance().componentWillMount();
    const firstAnswerBox = wrapper.find('AnswerBox').at(0).shallow();


    firstAnswerBox.simulate('press');

    expect(wrapper.find(TouchableHighlight).containsMatchingElement(
      <Text>Essayer à nouveau</Text>)).to.equal(true);
  });

  it('It should show the green button when i click on the correct answer ', () => {

    const firstAnswerBox = wrapper.find(AnswerBox).at(1).shallow();

    firstAnswerBox.simulate('press');

    expect(wrapper.find(TouchableHighlight).containsMatchingElement(
      <Text>Bonne réponse, continuer</Text>)).to.equal(true);
  });
});
