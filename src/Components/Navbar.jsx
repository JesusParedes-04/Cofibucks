import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/category"}>
                  <img
                    src="../image/Imagen-Logo.png"
                    alt="logo-principal"
                    width="120"
                  />
                </NavLink>
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
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li>
                      {" "}
                      <NavLink
                        className="nav-link"
                        activeclassname="page"
                        to={"/"}
                      >
                        Nosotros
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                      >
                        Productos
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className="nav-link active"
                            activeclassname="page"
                            to={"/category"}
                          >
                            Catalogo
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            className="nav-link active"
                            activeclassname="page"
                            to={"/category/frappuchino"}
                          >
                            Frappuchino
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link"
                            activeclassname="page"
                            to={"/category/cafe-caliente"}
                          >
                            Café Caliente
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="nav-link"
                            activeclassname="page"
                            to={"/category/cafe-frio"}
                          >
                            Café Frio
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li>
                      {" "}
                      <NavLink
                        className="nav-link"
                        activeclassname="page"
                        to={"/experiencia/"}
                      >
                        Experiencia Cofi
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <CartWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
