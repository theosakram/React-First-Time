import React from "react";
import BigCard from "./BigCard";
import DetailCard from "./DetailCard";

function YugiDetails({ cards }) {
  return (
    <div className="container">
      <div className="columns">
        {cards.map((card) => (
          <BigCard
            key={card.id}
            card={card.name}
            image={card.card_images[0].image_url}
          />
        ))}
        ,
        {cards.map((card) => (
          <DetailCard
            key={card.id}
            card={card.name}
            image={card.card_images[0].image_url}
            atk={card.atk}
            def={card.def}
            price={card.card_prices[0].cardmarket_price}
            type={card.type}
          />
        ))}
      </div>
      ;
    </div>
  );
}

export default YugiDetails;
