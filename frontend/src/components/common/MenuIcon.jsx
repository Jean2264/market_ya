// src/components/MenuIcon.jsx
import "./MenuIcon.css";

function MenuIcon({ open = false }) {
  return (
    <svg
      className={`menu-svg ${open ? "is-open" : ""}`}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line className="line top" x1="4" y1="6" x2="20" y2="6" />
      <line className="line middle" x1="4" y1="12" x2="20" y2="12" />
      <line className="line bottom" x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export default MenuIcon;
