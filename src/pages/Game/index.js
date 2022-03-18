import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./style.scss";

function Game() {
  // const navigate = useNavigate();
  // const [speed , setSpeed] = useState(0);
  // const [score , setScore] = useState(0);
  // const [gameStart , setGameStart] = useState(false);
  // const [gameRestart , setGameRestart] = useState(false);
  // const [ live , setLive ] = useState(3);

  useEffect(() => {
    const CreateBubble = () => {
      const Box = document.querySelector(".box");
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = `${Math.floor(Math.random(0 , 10 ) * 100)}%`;
      bubble.style.top = `${Math.floor(Math.random(0 , 10) * 100)}%`;
      Box.appendChild(bubble);
    };

    //setInterval(CreateBubble, 1000);
  }, []);

  return (
    <section className="game">
      <Header />
      <section className="box">sdsd</section>
    </section>
  );
}

export default Game;
