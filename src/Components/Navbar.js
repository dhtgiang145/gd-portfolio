import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  render() {
    if (this.props.data) {
      var logo = "images/" + this.props.data.logo;
    }

    return (
      <nav class="navbar sticky-top navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img id="navlogo" src={logo} alt="Giang Do Logo"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Works
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
