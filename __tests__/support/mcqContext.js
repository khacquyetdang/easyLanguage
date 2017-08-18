import Teacher from '../../app/business/models/teacher.js'
import Dictionary from '../../app/business/models/dictionary.js'
import MultipleChoice from '../../app/business/models/multipleChoice/multipleChoice.js'
import MultipleChoiceRunner from '../../app/business/models/multipleChoice/multipleChoiceRunner.js'

class MCQContext {
    constructor() {
        this.vietnamienDictionary = new Dictionary();
        this.teacher = new Teacher(this.vietnamienDictionary);
        this.runnedStems = [];
        this.mcqIsOver = false;
    }

    notifyRun(stem) {
        this.runnedStems.push(stem);
    }

    notifyEnd() {
        this.mcqIsOver = true;
    }

    initDictionary(table, vietnamienWordKey, frenchWordKey) {
        var wordRows = table.hashes();
        wordRows.forEach(function(wordRow) {
            var vietnamienWord = wordRow["Mot vietnamien"];
            var frenchEquivalent = wordRow["Equivalent français"];
            var families = [wordRow["Familles"]];

            this.vietnamienDictionary.addClassifiedEquivalent(vietnamienWord, frenchEquivalent, families);
        }, this);
    }        

    assertStemCoherence(stem, indice, expectedDistractionCount, errorReport) {
        var isStemCoherence = true;
        
        if(stem.key === undefined || stem.key === null) {
        isStemCoherence = false;
        errorReport.push("The " + (indice+1) + "e stem has no key");
        }

        var stemDistractionsLength = stem.distractions.length;
        if(stemDistractionsLength !== expectedDistractionCount) {
            isStemCoherence = false;
            errorReport.push("The " + (indice+1) + "e stem has " + stemDistractionsLength + " distractions instead of " + expectedDistractionCount);
        } 

        for(var distractionIndice = 0; distractionIndice < stemDistractionsLength; distractionIndice++) {
            var distraction = stem.distractions[distractionIndice];
            if(distraction === undefined || distraction === null) {
                isStemCoherence = false;
                errorReport.push("The " + (distractionIndice+1) + "e distraction of the " + (indice+1) + "e stem is null or undefined")
            }
        }

        return isStemCoherence;
    }

    assertStemIncoherence(stem, indice, expectedDistractionCount, errorReport) {
        return !this.assertStemCoherence(stem, indice, expectedDistractionCount, errorReport);
    }
};

export default MCQContext;