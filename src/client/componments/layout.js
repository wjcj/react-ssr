import React from 'react';
import './layout.sass';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <div className="app-main">{children}</div>
    </div>
  );
};

export default Layout;