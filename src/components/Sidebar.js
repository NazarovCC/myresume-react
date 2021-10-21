import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [expandedLinks, setExpandedLinks] = useState(false);

  const toggleLinks = () => () => {
    setExpandedLinks(!expandedLinks);
  };

  return (
    <>
      <div className="sidebar-links">
        <img
          src="https://img.icons8.com/ios-glyphs/60/000000/menu--v1.png"
          onClick={toggleLinks()}
          alt="burger"
        />
      </div>
      {expandedLinks ? (
        <div className="genre-component">
          <ul>
            <li
              className="sidebar-link"
              onClick={() => setExpandedLinks(false)}
            >
              <NavLink className="sidebar_text" to="/">
                {' '}
                Главная
              </NavLink>
            </li>
            <li
              className="sidebar-link"
              onClick={() => setExpandedLinks(false)}
            >
              <NavLink className="sidebar_text" to="/about">
                Обо мне
              </NavLink>
            </li>
            <li
              className="sidebar-link"
              onClick={() => setExpandedLinks(false)}
            >
              <NavLink className="sidebar_text" to="/project">
                {' '}
                Проекты
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
