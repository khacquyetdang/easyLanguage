import MultipleChoice from './multipleChoice/multipleChoice'
import MultipleChoiceStem from './multipleChoice/multipleChoiceStem'

class Teacher {
  constructor(dictionary) {
    this.dictionary = dictionary;
  }

 createQCM(countOfSteam) {
    var multipleChoice = new MultipleChoice();
    
    for(var steamIndice = 0; steamIndice < countOfSteam; steamIndice++) {
      var stem = this.generateStem();
      multipleChoice.addStem(stem);
    }

    return multipleChoice;
  }

  createQCMOnFamily(family) {
    var multipleChoice = new MultipleChoice();
    var stem = this.generateStemOnFamily(family);

    multipleChoice.addStem(stem);

    return multipleChoice;
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

  generateStem() {
    var availableWords = this.dictionary.getWords();
    var distractions = [];
    var distraction;

    var key = this.selectRandomWord(availableWords);

    for (var index = 0; index < 3; index++) {  
      do {
        distraction = this.selectRandomWord(availableWords);
      }
      while(distraction === key || this.isAlreadyProposed(distraction, distractions))
      distractions.push(distraction);
    }

    return new MultipleChoiceStem(key, distractions);
  }

  generateStemOnFamily(family) {
    var availableWords = [];
    var distractions = [];
    var distraction;

    this.dictionary.getWords().forEach(function(word) {
      if(this.dictionary.isOfFamily(word, family)) {
        availableWords.push(word);
      }
    }, this);

    if(availableWords.length < 4) {
      return undefined;
    }

    var key = this.selectRandomWord(availableWords);

    for (var index = 0; index < 3; index++) {  
      do {
        distraction = this.selectRandomWord(availableWords);
      }
      while(distraction === key || this.isAlreadyProposed(distraction, distractions))
      distractions.push(distraction);
    }

    return new MultipleChoiceStem(key, distractions);
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
};

export default Teacher;