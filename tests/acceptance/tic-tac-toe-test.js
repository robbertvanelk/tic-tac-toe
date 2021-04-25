import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tic tac toe', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Welcome to Tic-Tac-Toe');
    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');
    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');
    await click('.field:nth-child(2)');
    assert.dom('.field:nth-child(2)').hasText('O');
  });
});
