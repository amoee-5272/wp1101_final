import React, { useState } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import ReactCardFlip from "react-card-flip";

export default function DisplayCard(props) {
  const { cards } = props;

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const contentStyle = {
    height: "320px",
    color: "#fff",
    lineHeight: '320px',
    textAlign: "center",
    fontSize: "75px",
    padding: 0,
    margin: 0,
    background: "#545b62",
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "white",
          fontSize: "15px",
          lineHeight: "1.5715",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "white",
          fontSize: "15px",
          lineHeight: "1.5715",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Carousel
        afterChange={onChange}
        arrows
        {...settings}
        color={"black"}
        style={{ width: "100%" }}
      >
        {cards.map((card, i) => (
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div onClick={handleClick}>
              <h3 style={contentStyle}>{card.front}</h3>
            </div>
            <div onClick={handleClick}>
              <h3 style={contentStyle}>{card.back}</h3>
            </div>
          </ReactCardFlip>
        ))}
      </Carousel>
    </>
  );
}
