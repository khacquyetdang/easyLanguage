class Dictionary {
  
  constructor() {
    this.equivalents = {};
  }

 addEquivalent(word, equivalent) {
    if(!this.hasEquivalents(word)) {
      this.addFirstEquivalent(word, equivalent);
    } 
    else {
      this.completeEquivalents(word, equivalent)
    }
  }

  hasEquivalents(word) {
    return Object.keys(this.equivalents).find(function(translation) {
      return translation === word;
    }) !== undefined
  }

  addFirstEquivalent(word, equivalent) {
    this.equivalents[word] = [equivalent]
  }

  completeEquivalents(word, equivalent) {
    this.equivalents[word].push(equivalent)
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