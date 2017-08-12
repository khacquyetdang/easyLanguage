class Dictionary {
  
  constructor() {
    this.equivalents = {};
    this.families = {};
  }

 addEquivalent(word, equivalent) {
    if(!this.hasEquivalents(word)) {
      this.addFirstEquivalent(word, equivalent);
    } 
    else {
      this.completeEquivalents(word, equivalent);
    }
  }

  addClassifiedEquivalent(word, equivalent, families) {
    this.addEquivalent(word, equivalent);
    this.classify(word, families);
  }

  classify(word, families) {
    families.forEach(function(family) { 
      if(!this.hasFamilies(word)) {
        this.addFirstFamily(word, family);
      } 
      else {
        this.completeFamilies(word, family);
      }
    }, this);
  }

  hasEquivalents(word) {
    return Object.keys(this.equivalents).find(function(translation) {
      return translation === word;
    }) !== undefined
  }

  hasFamilies(word) {
    return Object.keys(this.families).find(function(translation) {
      return translation === word;
    }) !== undefined
  }

  addFirstEquivalent(word, equivalent) {
    this.equivalents[word] = [equivalent]
  }

  completeEquivalents(word, equivalent) {
    this.equivalents[word].push(equivalent)
  }

  addFirstFamily(word, family) {
    this.families[word] = [family]
  }

  completeFamilies(word, family) {
    this.families[word].push(family)
  }

  getWords() {
    return Object.keys(this.equivalents);
  }

  getEquivalents(word) {
    if(this.hasEquivalents(word)) {
      return this.equivalents[word];
    }

    return undefined;
  }
};

export default Dictionary;