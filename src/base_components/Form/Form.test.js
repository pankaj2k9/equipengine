import { fetchUser } from './index.js';

// asynchronous test
describe('Fetch User', () => {
  it('should throw error when firing this function', async () => {
    await expect(fetchUser()).rejects.toThrow();
  });
});

// const sumAddNumber = async (x,y) => {
//   const x = await x,
//         y = await y;

//   return x + y;
// };

// sumAddNumber(5,5) // 10
