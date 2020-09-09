import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";


export default class CustomNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <p
            className="nav-logo"
            onClick={this.scrollToTop}
            style={{ margin: "0 7em 0 0", fontWeight: "bold", fontSize: "2em" }}
          >
            <i class="fas fa-laptop-code"></i> Personal Portforio
          </p>

          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                style={{ textDecoration: 'none' }}
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                style={{ textDecoration: 'none' }}
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p>Projects</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                style={{ textDecoration: 'none' }}
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p>About Me</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                style={{ textDecoration: 'none' }}
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p>Career</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="spaces"
                style={{ textDecoration: 'none' }}
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <p>Contact</p>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
