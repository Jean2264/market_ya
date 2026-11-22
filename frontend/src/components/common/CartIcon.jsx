import "./CartIcon.css";

function CartIcon({ count = 0 }) {
  const displayCount = count > 9 ? "9+" : count;

  return (
    <span className="cart-icon-wrap">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4h2.5l2.3 10.5a1.5 1.5 0 0 0 1.47 1.18h9.46a1.5 1.5 0 0 0 1.46-1.15L21 7.5" />
        <circle cx="9.5" cy="19.5" r="1.5" />
        <circle cx="17" cy="19.5" r="1.5" />
      </svg>
      {count > 0 && <span className="cart-count"> {displayCount}</span>}
    </span>
  );
}

export default CartIcon;
