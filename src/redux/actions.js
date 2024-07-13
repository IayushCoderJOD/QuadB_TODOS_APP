// actions.js
import {
  ADD_TODO,
  EDIT_TODO,
  FILTER_TODOS,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const editTodo = (id, newText) => ({
  type: EDIT_TODO,
  payload: { id, newText },
});
