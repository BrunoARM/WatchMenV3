import React from "react";

export default function Nav() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">
            <h2>WatchMen</h2>
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-list__item">
            <a className="nav-list__link" href="/">
              Categories
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-list__link" href="/">
              Products
            </a>
          </li>
          <li className="nav-list__item">
            <a className="nav-list__link" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
