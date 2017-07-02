import Exercise from './exercise';
import Question from './question';

class Teacher {
  constructor(dictionary) {
    this.dictionary = dictionary;
  }

  createChallenge() {
    var exercise = new Exercise(this.dictionary);
    var availableWords = this.dictionary.getWords();

    for (var i = 0; i < 10; i++) {
      var randomWord = this.selectRandomWord(availableWords);

      exercise.addQuestion(new Question(randomWord, this.generatePropositions(availableWords, randomWord)));
    }

    return exercise;
  }

  generatePropositions(availableWords, word) {
    var propositions = [];
    var proposition;

    propositions.push(word);
    for (var index = 0; index < 3; index++) {  
      do {
        proposition = this.selectRandomWord(availableWords);
      }
      while(proposition === word || this.isAlreadyProposed(proposition, propositions))
      propositions.push(proposition);
    }

    return propositions;
  }

  isAlreadyProposed(word, propositions) {
    return propositions.find(function(proposition) {
      return proposition === word
    }) !== undefined;
  }

  selectRandomWord(availableWords) {
    var randomWordIndice = Math.floor(Math.random() * (availableWords.length - 1))
    return availableWords[randomWordIndice];
  }

  selectRandomWords(availableWords, randomWordsCount) {
    
  }
};

export default Teacher;