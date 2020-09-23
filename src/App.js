import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    color: "",
    todos: [
      { id: 0, text: " Intro to React", color: "#343a40", checked: false },
      { id: 1, text: " Intro to React", color: "#f03e3e", checked: true },
      { id: 2, text: " Intro to React", color: "", checked: false },
    ],
  };

  handleColorSelect = (color) => {
    this.setState({ color });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, color, todos } = this.state;
    if (input.length > 0) {
      this.setState({
        input: "",
        color: "",
        todos: todos.concat({
          id: this.id++,
          text: input,
          color: color,
          checked: false,
        }),
      });
    } else {
      alert("할 일을 입력해주세요.");
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked,
        },
        ...todos.slice(index + 1, todos.length),
      ],
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    const { input, todos } = this.state;
    const {
      handleColorSelect,
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
        selectedColor={this.state.color}
        onColorSelect={handleColorSelect}
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
