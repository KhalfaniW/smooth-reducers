import {todoListReducerTools} from "./index.js";

const {
  todoListReducer,
  createTodoListReducerState,
  getAllItems,
  getCompletedItems,
  getNonCompletedItems,
  addItem,
  completeItem,
  removeItem,
  resetItem,
} = todoListReducerTools;

test("does not add same item twice", () => {
  let state = createTodoListReducerState({
    items: ["completable_item1", "item3"],
  });
  expect(getNonCompletedItems(state)).toEqual(["completable_item1", "item3"]);
  expect(getAllItems(state)).toEqual(["completable_item1", "item3"]);

  state = todoListReducer(state, addItem("completable_item2"));
  state = todoListReducer(state, addItem("item4"));
  state = todoListReducer(state, addItem("item4"));
  state = todoListReducer(state, addItem("item4"));

  expect(getNonCompletedItems(state)).toEqual([
    "completable_item1",
    "item3",
    "completable_item2",
    "item4",
  ]);
  expect(getCompletedItems(state)).toEqual([]);
});
test("add and remove items ", () => {
  let state = createTodoListReducerState({
    items: ["completable_item1", "item3", "completable_item2"],
  });

  state = todoListReducer(state, addItem("completable_item2"));

  expect(getNonCompletedItems(state)).toEqual([
    "completable_item1",
    "item3",
    "completable_item2",
  ]);
  expect(getAllItems(state)).toEqual([
    "completable_item1",
    "item3",
    "completable_item2",
  ]);

  state = todoListReducer(state, addItem("item4"));

  state = todoListReducer(state, addItem("item4"));
  state = todoListReducer(state, addItem("item4"));

  state = todoListReducer(state, removeItem("completable_item2"));
  expect(getNonCompletedItems(state)).toEqual([
    "completable_item1",
    "item3",
    "item4",
  ]);
  expect(getCompletedItems(state)).toEqual([]);
});

test("complete and reset items", () => {
  let state = createTodoListReducerState({
    items: ["completable_item1", "item3", "completable_item2", "item4"],
  });

  state = todoListReducer(state, completeItem("completable_item2"));
  state = todoListReducer(state, completeItem("completable_item1"));

  expect(getNonCompletedItems(state)).toEqual(["item3", "item4"]);
  expect(getCompletedItems(state)).toEqual([
    "completable_item1",
    "completable_item2",
  ]);

  state = todoListReducer(state, resetItem("completable_item1"));
  expect(getCompletedItems(state)).toEqual(["completable_item2"]);
  expect(getNonCompletedItems(state)).toEqual([
    "completable_item1",
    "item3",
    "item4",
  ]);
});
