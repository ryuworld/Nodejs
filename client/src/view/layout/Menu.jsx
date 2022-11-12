import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Foundation">Foundation</Link>
        </li>
        <li>
          <Link to="/Components">Components</Link>
        </li>
      </ul>
    </nav>
  );
}
