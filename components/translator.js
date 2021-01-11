const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
  // main functions should return an object similar to this:
  //   {
  //     "text": "The car boot sale at Boxted Airfield was called off.",
  //     "translation": "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off."
  // }
  // pay attention to case
  // translator will need to parse strings for : . in examples using time.
  translateToAmericanEnglish(inputStr) {
    return { text: 'input', translation: 'output' };
  }
  translateToBritishEnglish(intputStr) {
    return { text: 'input', translation: 'output' };
  }
}

module.exports = Translator;
