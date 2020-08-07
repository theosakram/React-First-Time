import React from "react";
import YugiCard from "./YugiCard";

function YugiAll({ cards }) {
  return (
    <div className="container" style={{ marginTop: "25px" }}>
      <div className="columns is-multiline">
        {cards.map((card) => (
          <div data-testid="cards" key={card.id}>
            <YugiCard
              id={card.id}
              card={card.name}
              image={card.card_images[0].image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default YugiAll;
