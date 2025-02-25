import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to=''>Home</NavLink>
          </li>
          <li>
            <NavLink to='posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='login'>Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
