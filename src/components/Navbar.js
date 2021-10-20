import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
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
    </nav>
  );
};

export default Navbar;
