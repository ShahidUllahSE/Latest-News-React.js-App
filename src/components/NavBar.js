import React, { Component } from "react";

import { Link } from "react-router-dom";
const NavBar=()=> {
  
    return (
      <div>
        <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light ">
          <a className="navbar-brand" href="/">
            Latest News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home{" "}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/business">
                  Business
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Entertainment">
                  Entertainment
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/general">
                  General
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/science">
                  Science
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  Sports
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );

}

export default NavBar;
