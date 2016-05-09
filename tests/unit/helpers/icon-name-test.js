import { iconName } from 'macoto/helpers/icon-name';
import { module, test } from 'qunit';

module('Unit | Helper | icon name');

// Replace this with your real tests.
test('it returns a lowercase name', function(assert) {
  let result = iconName(["Hello"]);
  assert.equals(result, "hello-square");
});
