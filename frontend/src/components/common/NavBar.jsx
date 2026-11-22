import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import MenuIcon from "./MenuIcon";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar({ cartCount = 10 }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

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
          <button type="button" className="cart-mobile" aria-label="Carrito">
            <CartIcon count={cartCount} />
          </button>
          <button
            type="button"
            className="menu-button"
            aria-label={menuAbierto ? "cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <MenuIcon open={menuAbierto} />
          </button>
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
        {menuAbierto && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <NavLink to="/" onClick={() => setMenuAbierto(false)}>
                <i className="bi bi-house"></i>
                Inicio
              </NavLink>

              <NavLink to="/ofertas" onClick={() => setMenuAbierto(false)}>
                <i className="bi bi-tag"></i>
                Ofertas
              </NavLink>

              <NavLink to="/mas-vendidos" onClick={() => setMenuAbierto(false)}>
                <i className="bi bi-fire"></i>
                Más vendidos
              </NavLink>

              <NavLink to="/novedades" onClick={() => setMenuAbierto(false)}>
                <i className="bi bi-stars"></i>
                Novedades
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
