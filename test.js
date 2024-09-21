import test from 'ava';

import resolver from './dist/index.js';

test('resolver true', async (t) => {
  const [err] = await resolver(() => Promise.reject('err'))();

  t.is(err, 'err');
});

test('resolver false', async (t) => {
  const [, data] = await resolver(() => Promise.resolve('a'))();
  t.is(data, 'a');
});
