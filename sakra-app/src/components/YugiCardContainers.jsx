import React from "react";
import YugiCard from "./YugiCard";

function YugiCardContainer({ cards, randomizer }) {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="columns is-multiline">
        {cards.map((card) => (
          <YugiCard
            key={card.id}
            card={card.name}
            image={card.card_images[0].image_url}
          />
        ))}
      </div>
      <button onClick={randomizer} class="button is-success">
        Random
      </button>
    </div>
  );
}

export default YugiCardContainer;
