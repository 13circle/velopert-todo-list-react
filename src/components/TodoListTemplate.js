import React from "react";
import "./TodoListTemplate.css";

import Palette from "./Palette";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

const TodoListTemplate = ({ form, selectedColor, onColorSelect, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">오늘 할 일</div>
      <section className="colors-wrapper">
        <Palette
          colors={colors}
          selected={selectedColor}
          onSelect={onColorSelect}
        />
      </section>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default TodoListTemplate;
