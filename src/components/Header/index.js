import { useNavigate } from "react-router-dom";
import "./style.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button onClick={() => navigate("/")}>x</button>
      <h2>
        Score : <span>001</span>
      </h2>
    </header>
  );
}

export default Header;
