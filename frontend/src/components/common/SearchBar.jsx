import "./SearchBar.css";

function SearchBar({ onSearch, title, value, onChange }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <button className="search-btn" type="button" onClick={onSearch}>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
