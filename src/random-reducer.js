import {
  getRandomIntInclusive,
  getRandomBoolean,
  getRandomNumberGroup,
} from "smooth-tools";
import produce from "immer";
import * as _ from "lodash";
import seedrandom from "seedrandom";
//note this does not simulate randomness it simulated entropy because randomness
//is not testable
export function randomReducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case "UPDATE_SEED":
        draftState.seed = seedrandom(draftState.seed)();
        return draftState;
      case "GET_NEW_RANDOM_NUMBER":
        draftState.seed = seedrandom(draftState.seed)();
        draftState.currentRandomInt = getRandomIntInclusive({
          min: action.min,
          max: action.max,
          seed: draftState.seed,
        });
        return draftState;
      case "GET_NEW_RANDOM_BOOLEAN":
        draftState.seed = seedrandom(draftState.seed)();
        draftState.currentRandomInt = getRandomBoolean({
          probabilityOfTrue: action.probabilityOfTrue,
          seed: draftState.seed,
        });
        return draftState;

      default:
        return state;
    }
  });
}
export function createRandomReducerState({seed}) {
  return {seed, currentRandomBoolean: null, currentRandomInt: null};
}

export function createRandomSeedState(seed) {
  return {seed: seed};
}

export function changeRandomNumber({min, max}) {
  return {
    type: "GET_NEW_RANDOM_NUMBER",
    min,
    max,
  };
}
export function changeRandomBoolean({min, max}) {
  return {
    type: "GET_NEW_RANDOM_BOOLEAN",
    min,
    max,
  };
}
