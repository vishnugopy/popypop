import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.scss";

function Home() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const ChangePage = () => {
    if (name) {
      navigate("/game");
    } else {
      setAlert("Please Enter Your Name");
    }
  };

  return (
    <section className="home">
      <div className="NameContainer">
        <h1>Popy Pop</h1>
          {alert && <p className="alert">{alert}</p>}
        <div>
          <input
            type="text"
            placeholder="Your Name Please"
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem("name", e.target.value);
            }}
          />
          <button className="startbutton" onClick={ChangePage}>
            <span className="material-icons">play_arrow</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
