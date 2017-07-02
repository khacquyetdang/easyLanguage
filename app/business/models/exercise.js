import Question from './question';

class Exercise {
  constructor(dictionary) {
    this.dictionary = dictionary;
    
    this.questions = [];
    this.answers = [];
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  addAnswer(answer) {
    this.answers.push(answer);
  }

  isAnswerCorrect() {
    return this.isAnswerAnEquivalentsOf(this.questions[0].word, this.answers[0]);
  }

  isSucessful() {
    for(var indice = 0; indice < this.questions.length; indice++) {
      if(!this.isAnswerAnEquivalentsOf(this.questions[indice].word, this.answers[indice])) {
        console.log("Question: " + this.questions[indice]);
        console.log("Answer: " + this.answers[indice]);
        return false;
      }
    }

    return true;
  }

  isAnswerAnEquivalentsOf(word, answer) {
    if(!this.dictionary.hasEquivalents(word)) { return false; }
    
    var equivalents = this.dictionary.getEquivalents(word);

    return equivalents.find(this.areEquivalent.bind(answer)) !== undefined;
  }

  areEquivalent(equivalent) {
    return equivalent.trim().toUpperCase() === this.trim().toUpperCase();
  }

  getQuestions() {
    return this.questions;
  }
};

export default Exercise;