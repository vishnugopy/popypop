import { useNavigate } from "react-router-dom";
import "./style.scss";

function Home() {
  const navigate = useNavigate();
  const ChangePage = () => {
    navigate("/game");
  }


  return (
    <section className="home">
      <div>
        <h1>Home</h1>
        <label>
          <p>insert name</p>
          <input type="text" placeholder="name pls" />
        </label>

        <button>
          <p onClick={ChangePage}>start</p>
        </button>
      </div>
    </section>
  );
}

export default Home;
