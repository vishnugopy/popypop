import { useNavigate } from "react-router-dom";
import "./style.scss";

function Home() {
  const navigate = useNavigate();
  const ChangePage = () => {
    navigate("/game");
  };

  return (
    <section className="home">
      <div className="NameContainer">
        <h1>Popy Pop</h1>
        <div>
          <input type="text" placeholder="Your Name Please" />
        <button className="startbutton" onClick={ChangePage}>x</button>
        </div>

      </div>
    </section>
  );
}

export default Home;
