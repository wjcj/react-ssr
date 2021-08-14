import { TODOS_TYPE_INIT, USER_TYPE_SET } from './types';
import { getTodoList, getUserInfo } from '../services';

export const initTodos = playlod => ({ type: TODOS_TYPE_INIT, playlod });
export const setUser = playlod => ({ type: USER_TYPE_SET, playlod });

export const getTodos = () => {
  return dispatch => {
    return getTodoList().then(res => dispatch(initTodos(res.data)));
  }
};

export const getUser = () => {
  return dispatch => {
    return getUserInfo().then(res => dispatch(setUser(res.data)));
  }
};
