import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-top">
      <div className="nav-container">
        <div className="top">
          <Logo />
          <SearchBar />
          <div className="nav-user">
            <button>
              <i className="bi bi-person"></i>
            </button>
            <button>
              <i className="bi bi-heart"></i>
            </button>
            <button>
              <i className="bi bi-cart"></i>
            </button>
          </div>
        </div>
        <nav className="nav-navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ofertas"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Ofertas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mas-vendidos"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Más vendidos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/novedades"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Novedades
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
