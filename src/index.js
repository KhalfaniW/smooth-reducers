import {
  randomReducer,
  changeRandomNumber,
  changeRandomBoolean,
  createRandomReducerState,
} from "./random-reducer.js";
import {
  timeReducer,
  createTimerState,
  createIntervalEvent,
  createOneTimeEvent,
} from "./time-reducer.js";
import {
  todoListReducer,
  createTodoListReducerState,
  getCompletedItems,
  getNonCompletedItems,
  addItem,
  completeItem,
  removeItem,
  resetItem,
} from "./todo-list-reducer.js";

const allReducerTools = {
  randomReducerTools: {
    randomReducer,
    createRandomReducerState,
    changeRandomNumber,
    changeRandomBoolean,
  },
  timeReducerTools: {
    timeReducer,
    createTimerState,
    createIntervalEvent,
    createOneTimeEvent,
  },
  todoListReducerTools: {
    todoListReducer,
    createTodoListReducerState,
    getCompletedItems,
    getNonCompletedItems,
    addItem,
    completeItem,
    removeItem,
    resetItem,
  },
};
export default allReducerTools;
