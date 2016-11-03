import { test } from 'qunit';
import moduleForAcceptance from 'test-stack-size/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | the test');

test('visiting /the-test', function(assert) {
  visit('/the-test');

  andThen(function() {
    assert.equal(currentURL(), '/the-test');
  });
});
