import React from 'react';
import img from '../public/cats.jpeg';
import './header.sass';

const Header = ({ children }) => (
  <header className="header">
    <div className="header-profile"><img src={img}></img></div>
    <nav className="header-nav">{ children }</nav>
  </header>
);

export default Header;