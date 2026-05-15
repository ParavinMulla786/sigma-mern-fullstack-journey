import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <a className="navbar-brand" href="#">
          My Portfolio
        </a>

        
        <div className="collapse navbar-collapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;