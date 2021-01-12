'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  const translator = new Translator();

  app.route('/api/translate').post((req, res) => {
    if (req.body.hasOwnProperty('text') && !req.body.text.length) {
      return res.json({ error: 'No text to translate' });
    }
    if (!req.body.text || !req.body.locale) {
      return res.json({ error: 'Required field(s) missing' });
    }

    let response;

    if (req.body.locale === 'american-to-british') {
      response = translator.translate(req.body.text, 'en-gb');
    } else if (req.body.locale === 'british-to-american') {
      response = translator.translate(req.body.text, 'en-us');
    } else {
      response = { error: 'Invalid value for locale field' };
    }

    res.json(response);
  });
};
