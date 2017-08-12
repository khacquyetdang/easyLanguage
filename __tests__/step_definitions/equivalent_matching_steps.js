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

  Given('l\'apprenant viêtnamien challenge son vocabulaire français', function (callback) {
    this.vietnamienDictionary.addEquivalent("hello", "bonjour");
    this.vietnamienDictionary.addEquivalent("good", "bien");
    this.vietnamienDictionary.addEquivalent("bad", "mauvais");
    this.vietnamienDictionary.addEquivalent("right", "correcte");
    this.vietnamienDictionary.addEquivalent("wrong", "faux");
    this.vietnamienDictionary.addEquivalent("fast", "rapide");
    this.vietnamienDictionary.addEquivalent("slow", "lent");
    this.vietnamienDictionary.addEquivalent("tall", "grand");
    this.vietnamienDictionary.addEquivalent("small", "petit");
    this.vietnamienDictionary.addEquivalent("black", "noir");
    this.vietnamienDictionary.addEquivalent("white", "blanc");
    
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

  Then('la réponse devrait être correcte', function (callback) {
    assert.equal(true, this.exercise.isAnswerCorrect());
    callback();
  });

 Then('la réponse devrait être incorrecte', function (callback) {
    assert.equal(false, this.exercise.isAnswerCorrect());
    callback();
 });
});