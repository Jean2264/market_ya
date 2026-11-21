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
        <section className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>Aca van los productos nuevos</p>
        </section>
      );
    case "MARCAS":
      return (
        <section className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>seccion de marcas</p>
        </section>
      );

    case "PRODUCTOS_CATEGORIA":
      return (
        <section className="home-section">
          <h2>{seccion.titulo}</h2>
          <p>seccion de productos por categoria</p>
        </section>
      );

    default:
      return null;
  }
}

export default HomeSection;
