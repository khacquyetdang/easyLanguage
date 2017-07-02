'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

import World from '../support/world.js'
import Question from '../../app/business/models/question.js'

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(World);
});

defineSupportCode(function({Then, When, Given}) {
  Given('un apprenant est interrogé sur l\'équivalent français de "{wordToTranslate}"', function (wordToTranslate, callback) {
    this.exercise.addQuestion(new Question(wordToTranslate, []));
    callback();
  });

  Given('"{frenchEquivalent}" est l\'équivalent de "{vietnamienWord}"', function (frenchEquivalent, vietnamienWord, callback) {
    this.vietnamienDictionary.addEquivalent(vietnamienWord, frenchEquivalent);
    callback();
  });

  Given('"{frenchWord}" est un mot français', function (frenchWord, callback) {
    this.vietnamienDictionary.addEquivalent("dummyVientnamienWord", frenchWord);
    callback();
  });

  Given('ce dictionnaire:', function (table, callback) {
    this.initDictionary(table, "Mot vietnamien", "Equivalent français");
    callback();
  });


  Given('un apprenant passe un exercice comportant ces mots:', function (table, callback) {
    this.initDictionary(table, "Mot vietnamien", "Equivalent français");
    this.initChallenge(table, "Mot vietnamien");
    
    callback();
  });


  When('l\'apprenant répond "{answer}"', function (answer, callback) {
    this.exercise.addAnswer(answer);
    callback();
  });

  When('l\'apprenant répond', function (table, callback) {
    var answerRows = table.hashes();
    answerRows.forEach(function(anwserRow) {
      this.exercise.addAnswer(anwserRow["Réponse"]);
    }, this)
    callback();
  });

  When('l\'apprenant challenge son vocabulaire', function (callback) {
    this.exercise = this.teacher.createChallenge();
    callback();
  });

  Then('la réponse devrait être correcte', function (callback) {
    assert.equal(true, this.exercise.isAnswerCorrect());
    callback();
  });

 Then('la réponse devrait être incorrecte', function (callback) {
    assert.equal(false, this.exercise.isAnswerCorrect());
    callback();
 });

  Then('l\'exerice devrait être réussi', function (callback) {
    assert.equal(true, this.exercise.isSucessful());
    callback();
  });

  Then('l\'exerice ne devrait pas être réussi', function (callback) {
    assert.equal(false, this.exercise.isSucessful());
    callback();
  });

  Then('le challenge devrait contenir {int} questions aléatoires', function (int, callback) {
    assert.equal(10, this.exercise.getQuestions().length);
    callback();
  });

  Then('chaque question devrait comporter {expectedDifferentPropositionCount} propositions différentes', function (expectedDifferentPropositionCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      assert.equal(expectedDifferentPropositionCount, this.countDifferentPropositions(question))  
    }, this);
    
    callback();
  });

  Then('chaque question devrait comporter {correctPropositionCount} proposition correcte', function (correctPropositionCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      assert.equal(correctPropositionCount, this.countCorrectPropositions(question))  
    }, this);
    
    callback();
  });

  Then('chaque question devrait comporter {incorrectPropositionsCount} propositions incorrectes', function (incorrectPropositionsCount, callback) {
    var questions = this.exercise.getQuestions();
    
    questions.forEach(function(question) {
      var incorrectQuestionCounter = question.propositions.length - this.countCorrectPropositions(question)
      assert.equal(incorrectPropositionsCount, incorrectQuestionCounter)  
    }, this);
    
    callback();
  });

});