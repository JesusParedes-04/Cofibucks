import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from '../../public/Imagen-Logo.png';
import ReactSwitch from "react-switch";
import { ThemeContext } from "./context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <nav className="navbar navbar-expand-lg navbar-light mt-5">
              <div className="container-fluid">
                <Link className="navbar-brand" to={"/category"}>
                  <img
                    src={logo}
                    alt="logo-principal"
                    width="120"
                    className="img-logo"
                  />
                </Link>
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
                      <NavLink className="nav-link" activeclassname="page" to={"/"}>
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
                        Menu
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="nav-link active" activeclassname="page" to={"/category"}>
                            Catalogo Completo
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link active" activeclassname="page" to={"/category/frappuchino"}>
                            Frappuchino
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" activeclassname="page" to={"/category/cafe-expreso"}>
                            Expreso Caliente
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" activeclassname="page" to={"/category/shaken-expresso"}>
                            Shaken Expresso
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="nav-link" activeclassname="page" to={"/category/postres"}>
                            Postres
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink className="nav-link" activeclassname="page" to={"/experiencia/"}>
                        Experiencia Cofi
                      </NavLink>
                    </li>
                  </ul>
                  <div className="d-lg-none mt-3">
                    <ReactSwitch
                      onChange={toggleTheme}
                      checked={theme === 'darkMode'}
                      checkedIcon={
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 18 }}>
                          <FaMoon style={{ color: "white" }} />
                        </div>
                      }
                      uncheckedIcon={
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 18 }}>
                          <FaSun style={{ color: "white" }} />
                        </div>
                      }
                      offColor="#888"
                      onColor="#080"
                    />
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="d-flex col-md-6 align-items-center justify-content-end">
            <div className="me-4 d-none d-lg-block">
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === 'darkMode'}
                checkedIcon={
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 18 }}>
                    <FaMoon style={{ color: "white" }} />
                  </div>
                }
                uncheckedIcon={
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 18 }}>
                    <FaSun style={{ color: "white" }} />
                  </div>
                }
                offColor="#888"
                onColor="#080"
              />
            </div>
            <div className="me-5">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
