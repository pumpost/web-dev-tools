import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/object">Object</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
