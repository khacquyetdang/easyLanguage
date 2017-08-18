import MultipleChoiceStem from './multipleChoiceStem.js';
import MultipleChoice from './multipleChoice.js';

class MultipleChoiceRunner {
  constructor(mcq) {    
    this.mcq = mcq;

    this.observers = [];

    this.initCurrentStem();
  }

  registerObserver(observer) {
    this.observers.push(observer);
  }

  initCurrentStem() {
    this.currentStemIndice = 0;
    this.currentStem = this.mcq.stems[this.currentStemIndice];
  }

  goToNextStem() {
    this.currentStemIndice++;
    this.currentStem = this.mcq.stems[this.currentStemIndice];
  }

  canGoToNextStem() {
    return this.currentStemIndice < (this.mcq.stems.length - 1)
  }

  start() {
    this.initCurrentStem();
    this.runStem(this.currentStem);
  }

  runStem(stem) {
    this.observers.forEach(function(observer) {
      observer.notifyRun(stem);
    }, this);
  }

  answer(answer) {
    this.mcq.answer(answer);
    if(this.canGoToNextStem()) {
      this.goToNextStem();
      this.runStem(this.currentStem);
    } else {
      this.observers.forEach(function(observer) {
        observer.notifyEnd();
      }, this);
    }
  }
}

export default MultipleChoiceRunner;