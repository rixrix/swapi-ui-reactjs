import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import * as Icon from "react-feather";

const Navigation = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          {/* <li className="nav-item">
            <NavLink href="/" active>
              Dashboard
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink href="/people" active={window.location.pathname === '/people'}>
              <Icon.Users/> People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/vehicles" active={window.location.pathname === '/vehicles'}><Icon.Truck/> Vehicles</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/species" active={window.location.pathname === '/species'}><Icon.GitHub/> Species</NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/planets" active={window.location.pathname === '/planets'}><Icon.Globe/> Planets</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
