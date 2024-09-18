import React, { useState } from "react";
import "./index.css";

const Color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const utilityFunction = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = Array.from(
      { length: 6 },
      () => hex[utilityFunction(hex.length)]
    ).join("");
    setColor(`#${hexColor}`);
  };

  const createRgbColor = () => {
    const r = utilityFunction(256);
    const g = utilityFunction(256);
    const b = utilityFunction(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div className="container" style={{ background: color }}>
      <button onClick={createRgbColor}>Rgb Color</button>
      <button onClick={createHexColor}>HeX Color</button>
      <button onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}>
        GeneRate Color
      </button>
      <h1 className="heading">{color}</h1>
    </div>
  );
};

export default Color;
