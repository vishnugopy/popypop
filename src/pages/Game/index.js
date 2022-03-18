import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./style.scss";

function Game() {
  const [speed, setSpeed] = useState(1000);
  const [live, setLive] = useState(3);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomHsl() {
    return "hsla(" + Math.random() * 360 + ", 100%, 50%, 0.5)";
  }

  

  useEffect(() => {
    const interval = setInterval(() => {
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
    
        setTimeout(() => {
          Box.removeChild(bubble);
          setLive(live - 1);
        }, 5000);
    
        bubble.addEventListener("click", () => {
          bubble.remove();
        });
    
        if (live === 0) {
          alert("Game Over");
    
          localStorage.setItem("score", score);
    
          navigate("/");
        }
      };
      CreateBubble();
    }, speed);
    return () => {
      clearInterval(interval);
    };
  }, [speed , live, score, navigate]);

  useEffect(() => {
    const Box = document.querySelector(".box");

    function removeBubble(e) {
      if (e.target.classList.contains("bubble")) {
        setScore(score + 1);
      }
    }
    Box.addEventListener("click", removeBubble);

    

    if (score < 20) {
      setSpeed(speed);
    } else if (score > 10) {
      setSpeed(speed - 100);
    } else if (score > 50) {
      setSpeed(speed - 200);
    } else if (score > 100) {
      setSpeed(speed - 300);
    } else if (score > 200) {
      setSpeed(speed - 400);
    } else if (score > 300) {
      setSpeed(speed - 500);
    } else if (score > 400) {
      setSpeed(speed - 600);
    } else if (score > 500) {
      setSpeed(speed - 700);
    } else {
      setSpeed(speed - 800);
    }
  }, [score, speed ]);

  return (
    <section className="game">
      <Header score={score} />
      <section className="box"></section>
    </section>
  );
}

export default Game;
