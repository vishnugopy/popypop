import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./style.scss";

function Game() {
  const navigate = useNavigate();
  const [speed, setSpeed] = useState(5000);
  const [score, setScore] = useState(0);
  const [gameRestart, setGameRestart] = useState(false);
  const [live, setLive] = useState(3);

  useEffect(() => {
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomHsl() {
      return "hsla(" + Math.random() * 360 + ", 100%, 50%, 0.5)";
    }

    const CreateBubble = () => {
      const Box = document.querySelector(".box");
      const bubble = document.createElement("div");
      const MyColor = randomHsl();
      let winWidth = Box.offsetWidth - 100;
      let winHeight = Box.offsetHeight - 100;

      bubble.classList.add("bubble");

      bubble.style.left = getRandomNumber(0, winWidth) + "px";
      bubble.style.top = getRandomNumber(0, winHeight) + "px";
      bubble.style.backgroundColor = MyColor;
      bubble.style.borderColor = MyColor;
      Box.appendChild(bubble);
    };

    setInterval(CreateBubble, 800);
  }, []);

  const Bubble = document.querySelectorAll(".bubble");

  const BubbleClick = (e) => {
    if (e.target.classList.contains("bubble")) {
      e.target.remove();
      setScore(score + 1);
    }
  };

  const BubbleOut = (e) => {
    if (e.target.classList.contains("bubble")) {
      e.target.remove();
      setLive(live - 1);
    }
  };

  const GameOver = () => {
    if (live === 0) {
      setGameRestart(true);
    }
  };

  Bubble.forEach((bubble) => {
    bubble.addEventListener("click", BubbleClick);
    bubble.addEventListener("mouseout", BubbleOut);
  });

  return (
    <section className="game">
      <Header score={score} />
      <section className="box"></section>
    </section>
  );
}

export default Game;
