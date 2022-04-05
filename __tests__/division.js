const division = require("../division");

describe('division', () => {
  test('div a / b', async () => {
    try {
      const res = await division(10, 5)
      expect(res).toBe(2);
    }
    catch (e) {}
  });

  it('rejects if get zero', async () => {
    try {
      await division(1, 0);
    } catch (e) {
      expect(e).toMatch('нельзя')
    }
  });
});
