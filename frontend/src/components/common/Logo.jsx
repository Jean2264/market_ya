import "./Logo.css";
import { useNavigate } from "react-router-dom";
import MarketYaIcon from "../../assets/logo.png";

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = (home) => {
    navigate("/");
  };
  return (
    <div className="logo">
      <span className="logo-text">MarketYa!</span>

      <img src={MarketYaIcon} alt="Market Ya" className="logo-icon" />
    </div>
  );
}

export default Logo;
