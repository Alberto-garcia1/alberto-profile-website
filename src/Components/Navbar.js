import React from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";

function Header() {
  return (
    <header className="nav">
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this value according to your header height
              to="home"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} 
              to="about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} 
              to="qualifications"
            >
              QUALIFICATION
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} 
              to="projects"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70} 
              to="contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
