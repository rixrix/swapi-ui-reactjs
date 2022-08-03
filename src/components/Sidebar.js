import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';

const Navigation = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink href='/' active>Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href='/people'>People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href='/vehicles'>Vehicles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href='/species'>Species</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href='/planets'>Planets</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
