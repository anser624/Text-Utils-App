import React from "react";
import "../App.css"; // CSS file import karna zaroori hai

function NewComponent(props) {
  return (
    <nav className={`navbar bg-${props.mode}  navbar-expand-lg border-bottom`}>
      <div className="container-fluid mx-5">
        <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className={`nav-link text-${props.mode==="light"?"dark":"light"}`} href="/">
                {props.abouttext}
              </a>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input
          onClick={props.toggleMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

export default NewComponent;
