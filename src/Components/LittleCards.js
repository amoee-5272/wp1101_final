import React from 'react'
import instance from "../instance.js";
import SingleCard from "./SingleCard.js";
import AddModal from "./AddCardModal.js";


function LittleCards(props) {
  const { cardBookId, cards, visible, addNameRef, addDescriptionRef, handleCreate, handleCancel, deleteCard, setVisible } = props;


  return (
    <div
      style={{
        margin: "100px auto auto auto",
        height: 500,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <div style={{ width: "70%" }}>
        {cards.length ? (
          cards.map((card, i) => (
            <SingleCard
              cardInfo={card}
              type="normal-card"
              deleteFunc={()=>deleteCard(card.cardId, card.belong)}
            />
          ))
        ) : (
          <div />
        )}

        <SingleCard type="card-creater" onClick={() => setVisible(true)} />
      </div>
      <AddModal
        visible={visible}
        onCreate={handleCreate}
        onCancel={handleCancel}
        nameRef={addNameRef}
        descriptionRef={addDescriptionRef}
      />
    </div>
  );
}

export default LittleCards;
