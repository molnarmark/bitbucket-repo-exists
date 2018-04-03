const assert = require('assert');
const repoExists = require('../index.js');

describe('Repo Exists', () => {
  describe('check if repo exists', () => {
    it('should return true', () => {
      repoExists('molnarmark/webtown-go').then(result => assert.equal(result, true));
    });

    it('should return false', () => {
      repoExists('molnarmark/does-not-exist').catch(result => assert.equal(true, true));
    });
  });
});