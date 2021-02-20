import {randomReducerTools} from "./index.js";

const {
  changeRandomNumber,
  createRandomReducerState,
  randomReducer,
} = randomReducerTools;

test("get multiple random number", () => {
  const runEvent = jest.fn((state) => state);
  let state = createRandomReducerState({seed: 3});

  state = randomReducer(state, changeRandomNumber({min: 1, max: 10}));

  expect(state.currentRandomInt).toBe(1);
  state = randomReducer(state, changeRandomNumber({min: 1, max: 10}));

  expect(state.currentRandomInt).toBe(3);
});
