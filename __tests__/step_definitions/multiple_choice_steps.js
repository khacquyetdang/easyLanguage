'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

import MCQContext from '../support/mcqContext.js'
import MultipleChoiceRunner from '../../app/business/models/multipleChoice/multipleChoiceRunner.js'

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(MCQContext);
});

defineSupportCode(function({Then, When, Given}) {
  When('l\'apprenant commence un QCM', function (callback) {
    this.mcq = this.teacher.createQCM(10);
    callback();
  });

  When('l\'apprenant commence un QCM sur la famille "{family}"', function (family, callback) {
    this.mcq = this.teacher.createQCMOnFamily(family);
    callback();
  });

  Then('toutes ses tiges devraient être générées avec {expectedKeyCount} clé et {expectedDistractionCount} distractions',
  function (expectedKeyCount, expectedDistractionCount, callback) {
    var stems = this.mcq.stems;
    var countOfWrongStems = 0;
    var errorReport = [];
    
    for(var indice=0; indice < this.mcq.stems.length; indice++) {
      var stem = stems[indice];
      if(this.assertStemIncoherence(stem, indice, parseInt(expectedDistractionCount), errorReport)) {
        countOfWrongStems++;
      }
    }
    
    var errorMessage = "There are " + countOfWrongStems + " incoherence stems";
    errorReport.forEach(function(error) {
      errorMessage+="\n" + error;
    }, this);
    assert.equal(true, countOfWrongStems === 0, errorMessage);
    callback();
  });

  Then('toutes les tiges créées font parties de la famille "{family}"', function (family, callback) {
    var stems = this.mcq.stems;
    var countOfWrongStems = 0;
    var errorReport = [];
    
    for(var indice=0; indice < this.mcq.stems.length; indice++) {
      var stem = stems[indice];
      if(!this.vietnamienDictionary.isOfFamily(stem.key, family)) {
        countOfWrongStems++;
        errorReport.push("The key of the " + (indice+1) + "e stem is not of the family " + family);
      }
      stem.distractions.forEach(function(distraction) {
        if(!this.vietnamienDictionary.isOfFamily(distraction, family)) {
          countOfWrongStems++;
          errorReport.push("A distraction of the " + (indice+1) + "e stem is not of the family " + family);
        } 
      }, this);
    }
    
    var errorMessage = "There are " + countOfWrongStems + " incoherence stems";
    errorReport.forEach(function(error) {
      errorMessage+="\n" + error;
    }, this);
    assert.equal(true, countOfWrongStems === 0, errorMessage);
    callback();
    callback();
  });

  When('l\'apprenant commence un QCM de {int} tiges', function (int, callback) {
    this.mcq = this.teacher.createQCM(3);
    this.mcqRunner = new MultipleChoiceRunner(this.mcq);
    this.mcqRunner.registerObserver(this);
    this.mcqRunner.start();
    callback();
  });

  Then('la première tige devrait lui être proposée', function (callback) {
    assert.equal(this.runnedStems[0], this.mcq.stems[0]);
    callback();
  });

  When('l\'apprenant répond à la tige en cours', function (callback) {
    this.mcqRunner.answer("Dummy");
    callback();
  });

  Then('la seconde tige devrait lui être proposée', function (callback) {
    assert.equal(this.runnedStems[1], this.mcq.stems[1]);
    callback();
  });

  Then('la troisième tige devrait lui être proposée', function (callback) {
    assert.equal(this.runnedStems[2], this.mcq.stems[2]);
    callback();
  });

  Then('la fin du QCM devrait lui être indiquée', function (callback) {
    assert.equal(true, this.mcqIsOver);
    callback();
  });
});