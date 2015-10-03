import test from 'tape';
import compose from '../../source/compose';

test('Instance replacement', assert => {
  const newInstance = {
    new: true
  };

  compose({
    initializers: [
      () => {
        return newInstance;
      },
      (options, { instance }) => {
        const actual = instance;
        const expected = newInstance;

        assert.equal(actual, expected,
          'initializer return values should replace the instance');

        assert.end();
      }
    ]
  })();
});

test('Instance replacement', assert => {
  const message = 'instance replaced';
  const newInstance = {
    message: message
  };

  const obj = compose({
    initializers: [
      () => {
        return newInstance;
      }
    ]
  })();

  const actual = obj.message;
  const expected = message;

  assert.equal(actual, expected,
    'the replaced instance value should be returned from the stamp');

  assert.end();
});
