import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import instance from "../instance.js";
import "antd/dist/antd.css";
import { Layout, Typography } from "antd";
import { v4 as uuidv4 } from "uuid";
import DisplayCard from "../Components/DisplayCard.js";
import LittleCards from "../Components/LittleCards.js";

function ManyCards(props) {
  const { cardBookId } = props;
  const [cards, setCards] = useState([]);

  //variables for create new Card (AddModal)
  const [visible, setVisible] = useState(false);
  const addNameRef = useRef();
  const addDescriptionRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { message, data },
      } = await instance.get("/api/allCards", { params: { id: cardBookId } });

      setCards(data);
    };

    fetchData();
  });

  //for AddModal to create new card Card
  const handleCancel = () => {
    setVisible(false);
    addNameRef.current.state.value = "";
    addDescriptionRef.current.state.value = "";
  };

  const handleCreate = async () => {
    const newCardTitle = addNameRef.current.state.value;
    addNameRef.current.state.value = "";

    console.log(addNameRef.current.state.value);

    const newCardDescription = addDescriptionRef.current.state.value;
    addDescriptionRef.current.state.value = "";

    if (!newCardTitle || newCardTitle.trim() === "") return;

    setVisible(false);

    await instance.post("/api/newCard", {
      cardId: uuidv4(),
      belong: cardBookId,
      front: newCardTitle,
      back: newCardDescription,
    });
  };

  const deleteCard = async (cardid, bookid) =>
    await instance.delete("/api/deleteCard", {
      params: { cardId: cardid, bookId: bookid },
    });

  return (
      <Layout style={{ width: "80%", margin: "auto", display: "flex" }}>
        <DisplayCard cards={cards} cardBookId={cardBookId} />
        <LittleCards
          cards={cards}
          cardBookId={cardBookId}
          visible={visible}
          addNameRef={addNameRef}
          addDescriptionRef={addDescriptionRef}
          handleCreate={handleCreate}
          handleCancel={handleCancel}
          deleteCard={deleteCard}
          setVisible={setVisible}
        />
      </Layout>
  );
}

export default ManyCards;
