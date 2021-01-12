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
  // translator will send back a message if the output is the same as the input

  translateTime(input, language = 'toBritish') {
    const regex =
      language === 'toBritish'
        ? /(?<=^|[ ])\d{1,2}:\d{2}(?=\s|.|,)/
        : /(?<=^|[ ])\d{1,2}\.\d{2}(?=\s|.|,)/;
    const target = language === 'toBritish' ? ':' : '.';
    const value = language === 'toBritish' ? '.' : ':';

    if (regex.test(input)) {
      const match = input.match(regex)[0];
      const newTime = match.replace(target, value);
      return input.replace(match, `<span class="highlight">${newTime}<span>`);
    }
    return null;
  }

  translateToAmericanEnglish(inputStr) {
    let translation;
    let wasTranslated = false;

    if (!wasTranslated) {
      return { text: inputStr, translation: 'Everything looks good to me!' };
    }
    return { text: inputStr, translation: 'output' };
  }
  translateToBritishEnglish(inputStr) {
    const string = inputStr.toLowerCase();
    let translation = inputStr;
    let wasTranslated = false;

    // check if the string contains time
    const handleTime = this.translateTime(translation);
    if (handleTime) {
      wasTranslated = true;
      translation = handleTime;
    }

    // get the object keys from americanOnly, americanToBritishSpelling, americanToBritishTitles
    [americanOnly, americanToBritishSpelling, americanToBritishTitles].forEach(
      (dictionary) =>
        Object.keys(dictionary).forEach((key) => {
          let index = string.indexOf(key);
          if (index !== -1) {
            const subString = dictionary[key];
            wasTranslated = true;
            translation =
              translation.slice(0, index) +
              '<span class="highlight">' +
              subString +
              '</span>' +
              translation.slice(index + subString.length);
          }
        })
    );

    Object.keys(britishOnly).forEach((key) => {
      let index = string.indexOf(britishOnly[key]);
      if (index !== -1) {
        const subString = key;
        wasTranslated = true;
        translation =
          translation.slice(0, index) +
          '<span class="highlight">' +
          subString +
          '</span>' +
          translation.slice(index + subString.length);
      }
    });

    // check if the key is a substring of inputStr
    // if so, replace the substr with the translation surrounded by a span tag
    // make wasTranslated true
    // check if the substr appears multiple times

    if (!wasTranslated) {
      return { text: inputStr, translation: 'Everything looks good to me!' };
    }
    return { text: inputStr, translation };
  }
}

module.exports = Translator;
