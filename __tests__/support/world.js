import Question from '../../app/business/models/question.js'
import Exercise from '../../app/business/models/exercise.js'
import Dictionary from '../../app/business/models/dictionary.js'
import Teacher from '../../app/business/models/teacher.js'

class World {
    constructor() {
        this.vietnamienDictionary = new Dictionary();
        this.exercise = new Exercise(this.vietnamienDictionary);
        this.teacher = new Teacher(this.vietnamienDictionary);
    } 

    initDictionary(table, vietnamienWordKey, frenchWordKey) {
        var wordRows = table.hashes();
        wordRows.forEach(function(wordRow) {
        var vietnamienWord = wordRow["Mot vietnamien"];
        var frenchEquivalent = wordRow["Equivalent français"];
        this.vietnamienDictionary.addEquivalent(vietnamienWord, frenchEquivalent);
        }, this);
    }

    initChallenge(table, questionKey) {
        var wordRows = table.hashes();
        wordRows.forEach(function(wordRow) {
        var vietnamienWord = wordRow["Mot vietnamien"];
        this.exercise.addQuestion(new Question(vietnamienWord, []));
        }, this);
    }

    countDifferentPropositions(question) {
        var propositionRepetitionCount = {}
        
        question.propositions.forEach(function(proposition) {
            propositionRepetitionCount[proposition] = true;
        }, this);
      
        return Object.keys(propositionRepetitionCount).length;
    }

    countCorrectPropositions(question) {
        var propositions = question.propositions;
        var correctPropositionCounter = 0;

        propositions.forEach(function(proposition) {
            if(proposition == question.word) {
                correctPropositionCounter++;
            }
        }, this);

        return correctPropositionCounter;
    }
};

export default World;