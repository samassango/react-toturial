import * as constants from "../constants";

export const createTodo = data => ({
  type: constants.CREATE_TODO_ITEM,
  payload: data
});

export const completeTodo = data => ({
  type: constants.COMPLETE_TODO_ITEM,
  payload: data
});

export const removeTodo = data => ({
  type: constants.REMOVE_TODO_ITEM,
  payload: data
});
