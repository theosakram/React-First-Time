import React, { useState, useEffect } from "react";
import YugiCardContainers from "./YugiCardContainers";

function YugiAll({ cards }) {
  const [newCards, setNewCards] = useState([]);

  // useEffect((prevProps) => {
  //   if (prevProps.cards !== cards) {
  //     randArr();
  //   }
  // });

  function randArr() {
    let newYugiArr = Array.from(
      { length: 20 },
      (x, y) => cards[Math.floor(Math.random() * cards.length)]
    );
    setNewCards(newYugiArr);
  }

  return (
    <YugiCardContainers
      cards={newCards}
      randomizer={randArr}
    ></YugiCardContainers>
  );
}

export default YugiAll;
