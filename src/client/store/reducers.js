import { combineReducers } from 'redux';

import {
  TODOS_TYPE_INIT,
  TODOS_TYPE_ADD,
  TODOS_TYPE_REMOVE,
  TODOS_TYPE_TOGGLE,
  USER_TYPE_SET,
} from './types';

export const todoReducer = (state = [], action) => {
  const { type, playlod } = action;

  switch(type) {
    case TODOS_TYPE_INIT:
      return playlod || [];
    case TODOS_TYPE_ADD:
      return [...state, playlod];
    case TODOS_TYPE_REMOVE:
      return state.filter(todo => todo.id !== playlod);
    case TODOS_TYPE_TOGGLE: {
      const todoList = state.map(todo => {
        if (todo.id === playlod) {
          todo.completed = !todo.completed;
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return todoList;
    }
    default:
       return state;
  }
};

export const userReducer = (state = null, action) => {
  const { type, playlod } = action;

  switch(type) {
    case USER_TYPE_SET:
      return { ...(state || {}), ...playlod };
    default:
       return state;
  }
};

export default combineReducers({
  todos: todoReducer,
  user: userReducer,
});
