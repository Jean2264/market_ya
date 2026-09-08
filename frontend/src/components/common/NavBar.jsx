import Logo from "./Logo";
import SearchBar from "./SearchBar";
import "./NavBar.css";
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
      </div>
    </div>
  );
}

export default NavBar;
