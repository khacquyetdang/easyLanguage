'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

import World from '../support/world.js'

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(World);
});

defineSupportCode(function({Then, When, Given}) {
  Given('un apprenant passe un challenge comportant ces mots:', function (table, callback) {
    this.initDictionary(table, "Mot vietnamien", "Equivalent français");
    this.initChallenge(table, "Mot vietnamien");
    
    callback();
  });



  When('l\'apprenant challenge son vocabulaire', function (callback) {
    this.exercise = this.teacher.createChallenge();
    callback();
  });

  When('il sélectionne la bonne réponse de la première proposition', function (callback) {
    this.exercise.addAnswer(this.exercise.rightAnswer);
    callback();
  });



  Then('le challenge devrait être réussi', function (callback) {
    assert.equal(true, this.exercise.isSucessful());
    callback();
  });

  Then('le challenge ne devrait pas être réussi', function (callback) {
    assert.equal(false, this.exercise.isSucessful());
    callback();
  });

  Then('le challenge devrait contenir {expectedQuestionCount} questions aléatoires', function (expectedQuestionCount, callback) {
    assert.equal(expectedQuestionCount, this.exercise.getQuestions().length);
    callback();
  });

  Then('chaque question devrait comporter {expectedDifferentPropositionCount} propositions différentes', function (expectedDifferentPropositionCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      assert.equal(expectedDifferentPropositionCount, this.countDifferentPropositions(question))  
    }, this);
    
    callback();
  });

  Then('chaque question devrait comporter {expectedCorrectPropositionCount} proposition correcte', function (expectedCorrectPropositionCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      assert.equal(expectedCorrectPropositionCount, this.countCorrectPropositions(question))  
    }, this);
    
    callback();
  });

  Then('chaque question devrait comporter {expectedIncorrectPropositionsCount} propositions incorrectes', function (expectedIncorrectPropositionsCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      var incorrectQuestionCount = question.propositions.length - this.countCorrectPropositions(question)
      assert.equal(expectedIncorrectPropositionsCount, incorrectQuestionCount)  
    }, this);
    
    callback();
  });
});