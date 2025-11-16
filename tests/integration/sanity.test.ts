test('sanity: test env', () => {
  expect(process.env.NODE_ENV).toBe('integration');
});