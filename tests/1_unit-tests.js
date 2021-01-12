const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  suite('American to British English', function () {
    test('Translate Mangoes are my favorite fruit. to British English', function (done) {
      const text = 'Mangoes are my favorite fruit.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text: 'Mangoes are my favorite fruit.',
        translation:
          'Mangoes are my <span class="highlight">favourite</span> fruit.',
      });
      done();
    });
    test('Translate I ate yogurt for breakfast. to British English', function (done) {
      const text = 'I ate yogurt for breakfast.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text: 'I ate yogurt for breakfast.',
        translation:
          'I ate <span class="highlight">yoghurt</span> for breakfast.',
      });
      done();
    });
    test("Translate We had a party at my friend's condo. to British English", function (done) {
      const text = "We had a party at my friend's condo.";
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text: "We had a party at my friend's condo.",
        translation:
          'We had a party at my friend\'s <span class="highlight">flat</span>.',
      });
      done();
    });
    test('Translate Can you toss this in the trashcan for me? to British English', function (done) {
      const text = 'Can you toss this in the trashcan for me?';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation:
          'Can you toss this in the <span class="highlight">bin</span> for me?',
      });
      done();
    });
    test('Translate The parking lot was full. to British English', function (done) {
      const text = 'The parking lot was full.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation: 'The <span class="highlight">car park</span> was full.',
      });
      done();
    });
    test('Translate Like a high tech Rube Goldberg machine. to British English', function (done) {
      const text = 'Like a high tech Rube Goldberg machine.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation:
          'Like a high tech <span class="highlight">Heath Robinson device</span>.',
      });
      done();
    });
    test('Translate To play hooky means to skip class or work. to British English', function (done) {
      const text = 'To play hooky means to skip class or work.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation:
          'To <span class="highlight">bunk off</span> means to skip class or work.',
      });
      done();
    });
    test('Translate No Mr. Bond, I expect you to die. to British English', function (done) {
      const text = 'No Mr. Bond, I expect you to die.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation:
          'No <span class="highlight">Mr</span> Bond, I expect you to die.',
      });
      done();
    });
    test('Translate Dr. Grosh will see you now. to British English', function (done) {
      const text = 'Dr. Grosh will see you now.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation:
          '<span class="highlight">Dr</span> Grosh will see you now.',
      });
      done();
    });
    test('Translate Lunch is at 12:15 today. to British English', function (done) {
      const text = 'Lunch is at 12:15 today.';
      assert.isObject(translator.translate(text, 'en-gb'));
      assert.deepEqual(translator.translate(text, 'en-gb'), {
        text,
        translation: 'Lunch is at <span class="highlight">12.15</span> today.',
      });
      done();
    });
  });
  suite('British to American English', function () {
    test('Translate We watched the footie match for a while. to American English', function (done) {
      const text = 'We watched the footie match for a while.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'We watched the <span class="highlight">soccer</span> match for a while.',
      });
      done();
    });
    test('Translate Paracetamol takes up to an hour to work. to American English', function (done) {
      const text = 'Paracetamol takes up to an hour to work.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          '<span class="highlight">Tylenol</span> takes up to an hour to work.',
      });
      done();
    });
    test('Translate First, caramelise the onions. to American English', function (done) {
      const text = 'First, caramelise the onions.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'First, <span class="highlight">caramelize</span> the onions.',
      });
      done();
    });
    test('Translate I spent the bank holiday at the funfair. to American English', function (done) {
      const text = 'I spent the bank holiday at the funfair.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
      });
      done();
    });
    test('Translate I had a bicky then went to the chippy. to American English', function (done) {
      const text = 'I had a bicky then went to the chippy.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
      });
      done();
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", function (done) {
      const text = "I've just got bits and bobs in my bum bag.";
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
      });
      done();
    });
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', function (done) {
      const text = 'The car boot sale at Boxted Airfield was called off.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
      });
      done();
    });
    test('Translate Have you met Mrs Kalyani? to American English', function (done) {
      const text = 'Have you met Mrs Kalyani?';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'Have you met <span class="highlight">Mrs.</span> Kalyani?',
      });
      done();
    });
    test("Translate Prof Joyner of King's College, London. to American English", function (done) {
      const text = "Prof Joyner of King's College, London.";
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
      });
      done();
    });
    test('Translate Tea time is usually around 4 or 4.30. to American English', function (done) {
      const text = 'Tea time is usually around 4 or 4.30.';
      assert.isObject(translator.translate(text, 'en-us'));
      assert.deepEqual(translator.translate(text, 'en-us'), {
        text,
        translation:
          'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
      });
      done();
    });
  });
  suite('Highlight translations', function () {
    test('Highlight translation in Mangoes are my favorite fruit.', function (done) {
      const text = 'Mangoes are my favorite fruit.';
      assert.include(
        translator.translate(text, 'en-gb').translation,
        '<span class="highlight">favourite</span>'
      );
      done();
    });
    test('Highlight translation in I ate yogurt for breakfast.', function (done) {
      const text = 'I ate yogurt for breakfast.';
      assert.include(
        translator.translate(text, 'en-gb').translation,
        '<span class="highlight">yoghurt</span>'
      );
      done();
    });
    test('Highlight translation in We watched the footie match for a while.', function (done) {
      const text = 'We watched the footie match for a while.';
      assert.include(
        translator.translate(text, 'en-us').translation,
        '<span class="highlight">soccer</span>'
      );
      done();
    });
    test('Highlight translation in Paracetamol takes up to an hour to work.', function (done) {
      const text = 'Paracetamol takes up to an hour to work.';
      assert.include(
        translator.translate(text, 'en-us').translation,
        '<span class="highlight">Tylenol</span>'
      );
      done();
    });
  });
});
