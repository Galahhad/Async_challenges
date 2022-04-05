const promiseSquare = require("../wrap-into-promise");

describe('promiseSquare', () => {
  it('squares a number', async () => {
    try {
      const res = await promiseSquare(5)
      expect(res).toBe(25);
    }
    catch (e) {}
  });

  it('rejects if get zero', async () => {
    try {
      await promiseSquare(0);
    } catch (e) {
      expect(e).toMatch('Ошибка')
    }
  });
});
