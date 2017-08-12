'use strict';

var {defineSupportCode} = require('cucumber');
var assert = require('assert');

import QCMContext from '../support/qcmContext.js'

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(QCMContext);
});

defineSupportCode(function({Then, When, Given}) {
  When('l\'apprenant commence un QCM', function (callback) {
    this.qcm = this.teacher.createQCM();
    callback();
  });

  When('l\'apprenant commence un QCM sur la famille "{family}"', function (family, callback) {
    this.qcm = this.teacher.createQCMOnFamily(family);
    callback();
  });

  Then('toutes ses tiges devraient être générées avec {expectedKeyCount} clé et {expectedDistractionCount} distractions',
  function (expectedKeyCount, expectedDistractionCount, callback) {
    var stems = this.qcm.stems;
    var countOfWrongStems = 0;
    var errorReport = [];
    
    for(var indice=0; indice < this.qcm.stems.length; indice++) {
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
    var stems = this.qcm.stems;
    var countOfWrongStems = 0;
    var errorReport = [];
    
    for(var indice=0; indice < this.qcm.stems.length; indice++) {
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

});