import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tic tac toe', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Welcome to Tic-Tac-Toe');

  });

  test('Click fields', async function(assert) {
    await visit('/');

    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');
    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');
    await click('.field:nth-child(2)');
    assert.dom('.field:nth-child(2)').hasText('O');

  });

  test('Let a player win a game', async function(assert) {
    await visit('/');

    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');
    await click('.field:nth-child(4)');
    assert.dom('.field:nth-child(4)').hasText('O');
    await click('.field:nth-child(2)');
    assert.dom('.field:nth-child(2)').hasText('X');
    await click('.field:nth-child(5)');
    assert.dom('.field:nth-child(5)').hasText('O');
    await click('.field:nth-child(3)');
    assert.dom('.field:nth-child(3)').hasText('X');

    assert.dom('label').hasText('Congratulations X');

    await click('.field:nth-child(6)');
    assert.dom('.field:nth-child(6)').hasText('');
  });

  test('Let the players draw', async function(assert) {
    await visit('/');

    await click('.field:nth-child(5)');
    assert.dom('.field:nth-child(5)').hasText('X');
    await click('.field:nth-child(9)');
    assert.dom('.field:nth-child(9)').hasText('O');
    await click('.field:nth-child(7)');
    assert.dom('.field:nth-child(7)').hasText('X');
    await click('.field:nth-child(3)');
    assert.dom('.field:nth-child(3)').hasText('O');
    await click('.field:nth-child(6)');
    assert.dom('.field:nth-child(6)').hasText('X');
    await click('.field:nth-child(4)');
    assert.dom('.field:nth-child(4)').hasText('O');
    await click('.field:nth-child(2)');
    assert.dom('.field:nth-child(2)').hasText('X');
    await click('.field:nth-child(8)');
    assert.dom('.field:nth-child(8)').hasText('O');
    await click('.field:nth-child(1)');
    assert.dom('.field:nth-child(1)').hasText('X');

    assert.dom('label').hasText('Draw game');
  });
});
