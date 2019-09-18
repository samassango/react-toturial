import React from "react";

export default class TodoItem extends React.Component {
  style = {
    textStyle: {
      textDecoration: "none"
    },
    textIsComplete: {
      textDecoration: "line-through",
      textDecorationColor: "red",
      textDecorationStyle: "solid",
      color: "red"
    },
    divButtonStyle: {
      display: "flex",
      padding: "5px 5px 5px 5px"
    },
    containerStyle: {
      display: "grid",
      "grid-template-columns": "auto",
      "grid-column-gap": "10px",
      "background-color": this.props.todo.isActive ? "#03fcba" : "",
      margin: "1rem",
      padding: "2rem"
    }
  };

  handlerRemove() {
    console.log("todo remove", this.props.todo);
    this.props.activateHandler(this.props.todo);
  }
  handlerComplete() {
    this.props.complete(this.props.todo);
  }
  render() {
    return (
      <div className={this.style.containerStyle}>
        <label
          style={
            this.props.todo.isComplete
              ? this.style.textIsComplete
              : this.style.textStyle
          }
        >
          {this.props.todo.description}
        </label>
        <div
          style={
            this.props.todo.isComplete
              ? this.style.textIsComplete
              : this.style.textStyle
          }
        >
          {this.props.todo.date}
        </div>
        <div style={this.style.divButtonStyle}>
          <button onClick={this.handlerRemove.bind(this)}>Remove</button>
          <button onClick={this.handlerComplete.bind(this)}>Complete</button>
        </div>
      </div>
    );
  }
}
