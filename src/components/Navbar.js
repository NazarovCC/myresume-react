import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <Breakpoint large up>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Обо мне
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/project">
              Проекты
            </NavLink>
          </li>
        </ul>
      </Breakpoint>
      <Breakpoint medium down>
        <Sidebar />
      </Breakpoint>
    </nav>
  );
};

export default Navbar;
