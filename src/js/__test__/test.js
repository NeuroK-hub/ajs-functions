import healthCalc from '../app';

test('show status for 0', () => {
  const health = healthCalc({ name: 'Маг', health: 14 });
  expect(health).toBe('critical');
});

test('show status for 14', () => {
  const health = healthCalc({ name: 'Маг', health: 14 });
  expect(health).toBe('critical');
});

test('show status for 15', () => {
  const health = healthCalc({ name: 'Маг', health: 15 });
  expect(health).toBe('wounded');
});

test('show status for 50', () => {
  const health = healthCalc({ name: 'Маг', health: 50 });
  expect(health).toBe('wounded');
});

test('show status for 70', () => {
  const health = healthCalc({ name: 'Маг', health: 70 });
  expect(health).toBe('healthy');
});
