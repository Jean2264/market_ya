import "./HomeSection.css";

function HomeSection({ seccion }) {
  switch (seccion.tipo) {
    case "BENEFICIOS":
      return (
        <seccion className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>seccion de beneficios</p>
        </seccion>
      );

    case "PRODUCTOS_NUEVOS":
      return (
        <seccion className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>Aca van los productos nuevos</p>
        </seccion>
      );
    case "MARCAS":
      return (
        <seccion className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>seccion de marcas</p>
        </seccion>
      );

    case "PRODUCTOS_CATEGORIA":
      return (
        <seccion className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>seccion de productos por categoria</p>
        </seccion>
      );

    default:
      return null;
  }
}

export default HomeSection;
