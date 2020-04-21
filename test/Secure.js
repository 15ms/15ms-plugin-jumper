/* global describe it */

const assert = require('assert');
const path = require('path');
const Secure = require('../lib/Secure');

const secure = new Secure({
  public: path.join(__dirname, 'fixtures/15ms.pub'),
  private: path.join(__dirname, 'fixtures/15ms.key')
});

describe('Secure', () => {
  it('create hash, should be verified', () => {
    const hash = secure.createHash('test-verb', 'test-data');
    console.log(hash);
    assert.ok(secure.verifyHash('test-verb', 'test-data', hash));
  });
});
