import "./BenefitCard.css";

function BenefitCard({ beneficio }) {
  return (
    <div className="benefit-card">
      <img
        src={`http://localhost:3000${beneficio.imagen}`}
        alt={beneficio.titulo}
      />
      <div className="benefit-info">
        <span className="beneficio-name">{beneficio.titulo}</span>
        <p className="benefit-description">{beneficio.descripcion}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
