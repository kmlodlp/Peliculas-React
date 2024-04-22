import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarApp = () => {
  return (
    <>
      <nav className="navbar bg-primary navbar-expand-lg " data-bs-theme="dark">  {/* bg-body-tertiary*/}
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" >
              Estrenos
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/MejoresCalificadas" className="nav-link active" aria-current="page" >
                    Mejores Calificadas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Cartelera" className="nav-link active" aria-current="page" >
                    Cartelera
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Generos" className="nav-link active" aria-current="page">
                    Populares
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
      </nav>
    </>
  );
};
