import React from "react";
import { fakeAuth } from '../utils';

const Login = ({ history, location }) => {
  const { from } = location.state || { from: { pathname: "/" } };
  const login = () => {
    fakeAuth.signin(() => { history.replace(from); });
  };
  return (
    <div>
      <p>您必须登录才能在查看页面 {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;