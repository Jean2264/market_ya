import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ categoria }) {
  return (
    <Link to={`/categorias/${categoria.idcategoria}`} className="category-card">
      <img
        src={`http://localhost:3000${categoria.imagen}`}
        alt={categoria.nombre}
      />
      <span className="categoria-name">{categoria.nombre}</span>
    </Link>
  );
}

export default CategoryCard;
