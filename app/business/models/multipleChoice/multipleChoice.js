import MultipleChoiceStem from './multipleChoiceStem.js';

/* 
  Multiple choice definition from Wikipedia
  
  Multiple choice items consist of a stem, the correct answer, keyed alternative, and distractors. 
  The stem is the beginning part of the item that presents the item as 
    - a problem to be solved, 
    - a question asked of the respondent, 
    - or an incomplete statement to be completed, 
    - as well as any other relevant information. 
  The options are the possible answers that the examiner can choose from, 
    with the correct answer called the key and the incorrect answers called distractors.
  Only one answer can be keyed as correct. 
    This contrasts with multiple response items in which more than one answer may be keyed as correct.
*/

class MultipleChoice {
  constructor(dictionary) {    
    this.dictionary = dictionary;

    this.stems = [];
    this.answers = [];
  }

  addStem(stem) {
    this.stems.push(stem);
  }

  getStems() {
    return this.stems;
  }
};

export default MultipleChoice;