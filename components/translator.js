const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {
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

  translateToAmericanEnglish(inputStr) {
    let input = inputStr;

    Object.keys(britishOnly).forEach((key) => {
      const boundary = `(?<=^|[ ])${key}(?=\\s|\\.|,)`;
      const regex = new RegExp(boundary, 'gi');

      if (regex.test(input)) {
        let replacement = britishOnly[key];

        this.wasTranslated = true;
        input = input.replace(
          regex,
          '<span class="highlight">' + replacement + '</span>'
        );
      }
    });

    [americanToBritishSpelling, americanToBritishTitles].forEach(
      (dictionary, i) =>
        Object.keys(dictionary).forEach((key) => {
          const boundary = `(?<=^|[ ])${dictionary[key]}(?=\\s|\\.|,)`;
          const regex = new RegExp(boundary, 'gi');

          if (regex.test(input)) {
            let replacement = key;
            if (i === 1) {
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
