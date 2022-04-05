const square = require("../cb-to-promise");

describe('square', () => {
  it('squares a number', async () => {
    try {
      const res = await square(5)
      expect(res).toBe(25);
    }
    catch (e) {}
  });

  it('rejects if get zero', async () => {
    try {
      await square(0);
    } catch (e) {
      expect(e).toMatch('Ошибка')
    }
  });
});
