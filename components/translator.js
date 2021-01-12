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

  translateTime(input, language = 'en-gb') {
    const regex =
      language === 'en-gb'
        ? /(?<=^|[ ])\d{1,2}:\d{2}(?=\s|\.|,)/
        : /(?<=^|[ ])\d{1,2}\.\d{2}(?=\s|\.|,)/;
    const target = language === 'en-gb' ? ':' : '.';
    const value = language === 'en-gb' ? '.' : ':';

    if (regex.test(input)) {
      const match = input.match(regex)[0];
      const newTime = match.replace(target, value);
      return input.replace(match, `<span class="highlight">${newTime}</span>`);
    }
    return null;
  }

  capitalizeTitle(title) {
    return title[0].toUpperCase() + title.slice(1);
  }

  capitalizeTranslation(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  translateToAmericanEnglish(inputStr) {
    let input = inputStr;
    [americanOnly, americanToBritishSpelling, americanToBritishTitles].forEach(
      (dictionary, i) =>
        Object.keys(dictionary).forEach((key) => {
          const boundary = `(?<=^|[ ])${key}(?=\\s|\\.|,)`;
          const regex = new RegExp(boundary, 'gi');

          if (regex.test(input)) {
            let replacement = dictionary[key];
            if (i === 2) {
              replacement = this.capitalizeTitle(replacement);
            }
            this.wasTranslated = true;
            input = input.replace(
              regex,
              '<span class="highlight">' + replacement + '</span>'
            );
          }
        })
    );

    return input;
  }

  translateToBritishEnglish(inputStr) {
    let input = inputStr;
    [americanOnly, americanToBritishSpelling, americanToBritishTitles].forEach(
      (dictionary, i) =>
        Object.keys(dictionary).forEach((key) => {
          const boundary = `(?<=^|[ ])${key}(?=\\s|\\.|,)`;
          const regex = new RegExp(boundary, 'gi');

          if (regex.test(input)) {
            let replacement = dictionary[key];
            if (i === 2) {
              replacement = this.capitalizeTitle(replacement);
            }
            this.wasTranslated = true;
            input = input.replace(
              regex,
              '<span class="highlight">' + replacement + '</span>'
            );
          }
        })
    );

    return input;
  }
  // translateToBritishEnglish(inputStr) {
  //   let translation = inputStr;
  //   let wasTranslated = false;

  //   // check if the string contains time
  //   const handleTime = this.translateTime(translation);
  //   if (handleTime) {
  //     wasTranslated = true;
  //     translation = handleTime;
  //   }

  //   // get the object keys from americanOnly, americanToBritishSpelling, americanToBritishTitles
  //   [americanOnly, americanToBritishSpelling, americanToBritishTitles].forEach(
  //     (dictionary, i) =>
  //       Object.keys(dictionary).forEach((key) => {
  //         const boundary = `(?<=^|[ ])${key}(?=\\s|\\.|,)`;
  //         const regex = new RegExp(boundary, 'gi');

  //         // check if the key is a substring of inputStr
  //         if (regex.test(translation)) {
  //           let replacement = dictionary[key];
  //           if (i === 2) {
  //             replacement = this.capitalizeTitle(replacement);
  //           }
  //           // make wasTranslated true
  //           wasTranslated = true;
  //           // if so, replace the substr with the translation surrounded by a span tag
  //           translation = translation.replace(
  //             regex,
  //             '<span class="highlight">' + replacement + '</span>'
  //           );
  //         }
  //       })
  //   );

  //   if (!wasTranslated) {
  //     return { text: inputStr, translation: 'Everything looks good to me!' };
  //   }
  //   return { text: inputStr, translation };
  // }

  translate(inputStr, language = 'en-gb') {
    let translation = inputStr;
    this.wasTranslated = false;

    const handleTime = this.translateTime(translation, language);
    if (handleTime) {
      this.wasTranslated = true;
      translation = handleTime;
    }

    if (language === 'en-gb') {
      translation = this.translateToBritishEnglish(translation);
    } else if (language === 'en-us') {
      translation = this.translateToAmericanEnglish(translation);
    }

    if (!this.wasTranslated) {
      return { text: inputStr, translation: 'Everything looks good to me!' };
    }
    return { text: inputStr, translation };
  }
}

module.exports = Translator;
