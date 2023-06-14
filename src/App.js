import React, { useState, useEffect } from "react";
import "./styles.css";
import { FaQuoteRight } from "react-icons/fa";

const people = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "Office Manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "Regular Guy",
    quote:
      "Gastropub sustainable tousledprism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "Product Designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "The Boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const startTimer = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000);
    setTimerId(id);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const toggleTimer = () => {
    if (timerId) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + people.length) % people.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  return (
    <div className="app">
      <button className="stop-resume" onClick={toggleTimer}>
        {timerId ? "Stop" : "Resume"}
      </button>
      <div className="profile">
        <button className="arrow left" onClick={goToPrevious}>
          {"<"}
        </button>
        <img src={people[currentIndex].image} alt={people[currentIndex].name} />
        <h2>{people[currentIndex].name}</h2>
        <h3>{people[currentIndex].title}</h3>
        <p>{people[currentIndex].quote}</p>
        <button className="arrow right" onClick={goToNext}>
          {">"}
        </button>
        <footer>
          <FaQuoteRight size={50} style={{ fill: "orange" }} />
        </footer>
      </div>
    </div>
  );
}

export default App;
