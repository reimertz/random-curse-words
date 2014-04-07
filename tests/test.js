var assert = require('assert');
var curseWords = require('../index.js');

describe('random-curse-words', function() {
  it('should return one word when called with no arguments', function() {
    var word = curseWords();
    assert.ok(typeof(word) === 'string', 'word is a string');
    assert.ok(word.length, 'word is not empty');
    assert.ok(word.charAt(0) !== ' ', 'word does not start with a space');
    assert.ok(word.slice(-1) !== ' ', 'word does not end with a space');
  });
  it('should return 5 words when called with the number 5', function() {
    var words = curseWords(5);
    assert.ok(words.length === 5, 'contains 5 elements');
  });
});

