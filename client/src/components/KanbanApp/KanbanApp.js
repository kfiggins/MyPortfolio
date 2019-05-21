import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { generateId } from "../../utils/GenerateId";

import Column from "./Column";

export default function Kanban() {
  //     cards: JSON.parse(window.localStorage.getItem("cards")) || [

  const [cards, setCard] = useState([
    { id: generateId(), title: "card1", position: 1 },
    { id: generateId(), title: "card2", position: 2 },
    { id: generateId(), title: "card3", position: 3 },
    { id: generateId(), title: "card4", position: 4 },
    { id: generateId(), title: "card5", position: 1 },
    { id: generateId(), title: "card6", position: 2 },
    { id: generateId(), title: "card7", position: 3 },
    { id: generateId(), title: "card8", position: 4 }
  ]);

  //     window.localStorage.setItem("cards", JSON.stringify(this.state.cards));

  const addCard = card => {
    card.id = generateId();
    setCard([...cards, card]);
  };

  const moveCardRight = id => {
    let card = cards.find(card => card.id === id);
    if (card.position === 4) return;
    card.position = card.position + 1;
    setCard([...cards.filter(card => card.id !== id), card]);
  };

  const moveCardLeft = id => {
    let card = cards.find(card => card.id === id);
    if (card.position === 1) return;
    card.position = card.position - 1;
    setCard([...cards.filter(card => card.id !== id), card]);
  };

  const column1Cards = cards.filter(card => card.position === 1);
  const column2Cards = cards.filter(card => card.position === 2);
  const column3Cards = cards.filter(card => card.position === 3);
  const column4Cards = cards.filter(card => card.position === 4);

  // useEffect(() => {
  //   window.localStorage.setItem("cards", JSON.stringify(cards));
  // });

  const Wrapper = styled.div`
    display: flex;
  `;

  return (
    <Wrapper>
      <Column
        name={"Bob"}
        headerColor={"#8E6E95"}
        cards={column1Cards}
        addCard={addCard}
        columnPostion={1}
        moveCardRight={moveCardRight}
        moveCardLeft={moveCardLeft}
      />
      <Column
        name={"Kyler"}
        headerColor={"#39A59C"}
        cards={column2Cards}
        addCard={addCard}
        columnPostion={2}
        moveCardRight={moveCardRight}
        moveCardLeft={moveCardLeft}
      />
      <Column
        name={"Derek"}
        headerColor={"#344759"}
        cards={column3Cards}
        addCard={addCard}
        columnPostion={3}
        moveCardRight={moveCardRight}
        moveCardLeft={moveCardLeft}
      />
      <Column
        name={"George"}
        headerColor={"#E8741E"}
        cards={column4Cards}
        addCard={addCard}
        columnPostion={4}
        moveCardRight={moveCardRight}
        moveCardLeft={moveCardLeft}
      />
    </Wrapper>
  );
}
