import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, color, checked, id, onToggle, onRemove } = this.props;

    return (
      <div
        className="todo-item"
        style={{ background: color }}
        onClick={() => onToggle(id)}
      >
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // Prevent executing onToggle
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked ? "checked" : ""}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">&#x2713;</div>}
      </div>
    );
  }
}

export default TodoItem;
