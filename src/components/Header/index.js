import { useNavigate } from "react-router-dom";
import "./style.scss";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="backbutton" onClick={() => navigate("/")}>
        <span className="material-icons">keyboard_backspace</span>
      </button>

      <h2>{localStorage.getItem("name") ? localStorage.getItem("name") : "Yourname" }</h2>
      <h2>
        Score : <span>{props.score}</span>
      </h2>
    </header>
  );
}

export default Header;
