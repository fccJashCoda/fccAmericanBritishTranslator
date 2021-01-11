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
  translateToAmericanEnglish(inputStr) {}
  translateToBritishEnglish(intputStr) {}
}

module.exports = Translator;
