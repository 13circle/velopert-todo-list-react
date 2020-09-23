import React from "react";
import "./Palette.css";

const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active ? "active" : ""}`}
      style={{ background: color }}
      onClick={() => onClick(color)}
    ></div>
  );
};

const Palette = ({ colors, selected, onSelect }) => {
  return (
    <div className="palette">
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          active={color === selected}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default Palette;
