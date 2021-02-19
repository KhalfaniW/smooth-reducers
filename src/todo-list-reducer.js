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
export function todoListReducer(state, action) {
  return produce(state, (draftState) => {
    const itemName = action.itemName;
    switch (action.type) {
      case "ADD_ITEM":
        //use object to avoid duplicates
        draftState.todoItemDictionary[itemName] = {isComplete: false};
        return;
      case "REMOVE_ITEM":
        delete draftState.todoItemDictionary[itemName];
        return;
      case "COMPLETE_ITEM":
        if (itemName in draftState.todoItemDictionary)
          draftState.todoItemDictionary[itemName].isComplete = true;
        return;
      case "RESET_ITEM":
        if (itemName in draftState.todoItemDictionary)
          draftState.todoItemDictionary[itemName].isComplete = false;
        return;
      default:
        return;
    }
  });
}

export function createTodoListReducerState({items}) {
  const itemDictionary = items.reduce((objectAccumulator, nextItem) => {
    objectAccumulator[nextItem] = {isComplete: false};
    return objectAccumulator;
  }, {});

  return {todoItemDictionary: itemDictionary};
}
export function getCompletedItems(todoListState) {
  const allItems = Object.entries(todoListState.todoItemDictionary).filter(
    ([key, value]) => {
      return value.isComplete;
    },
  );
  const completedItems = allItems.map(([key, value]) => key);
  return completedItems;
}

export function getNonCompletedItems(todoListState) {
  const allItems = Object.entries(todoListState.todoItemDictionary).filter(
    ([key, value]) => {
      return !value.isComplete;
    },
  );
  const nonCompletedItems = allItems.map(([key, value]) => key);

  return nonCompletedItems;
}

export function addItem(itemName) {
  return {
    type: "ADD_ITEM",
    itemName,
  };
}
export function removeItem(itemName) {
  return {
    type: "REMOVE_ITEM",
    itemName,
  };
}
export function completeItem(itemName) {
  return {
    type: "COMPLETE_ITEM",
    itemName,
  };
}
export function resetItem(itemName) {
  return {
    type: "RESET_ITEM",
    itemName,
  };
}
