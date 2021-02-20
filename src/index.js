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
  getAllItems,
  getCompletedItems,
  getNonCompletedItems,
  addItem,
  completeItem,
  removeItem,
  resetItem,
} from "./todo-list-reducer.js";

const randomReducerTools = {
    randomReducer,
    createRandomReducerState,
    changeRandomNumber,
    changeRandomBoolean,
  },
  timeReducerTools = {
    timeReducer,
    createTimerState,
    createIntervalEvent,
    createOneTimeEvent,
  },
  todoListReducerTools = {
    todoListReducer,
    createTodoListReducerState,
    getAllItems,
    getCompletedItems,
    getNonCompletedItems,
    addItem,
    completeItem,
    removeItem,
    resetItem,
  };

export {randomReducerTools, timeReducerTools, todoListReducerTools};
