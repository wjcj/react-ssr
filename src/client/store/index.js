import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action);
    console.log('state after dispatch', getState());
    return returnValue;
  }
}

// 保证每个用户访问时独立的 store
export const createServerStore = initialState => createStore(reducers, initialState, applyMiddleware(thunk));

// 脱水
export const createClientStore = () => {
  let defaultState = {};
  const textarea = document.getElementById('textarea-ssr-data');
  if (textarea && textarea.value) {
    defaultState = JSON.parse(textarea.value);
  }
  return createStore(reducers, defaultState, applyMiddleware(logger, thunk));
};
