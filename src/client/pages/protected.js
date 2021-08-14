import React from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../utils';

const Protected = ({ location, history }) => {
  const toPath = { pathname: '/login', state: { from: location }};
  const signout = () => {
    fakeAuth.signout(() => { 
      history.push(toPath);
    });
  };
  return fakeAuth.isAuthenticated ?
    <div>已登录。<button onClick={signout}>Sign out</button></div>
    : <Redirect to={toPath} />;
};

export default Protected;
