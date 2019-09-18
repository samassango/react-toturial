import React from "react";
import "./index.css";

export default class TodoForm extends React.Component {
  state = {
    description: "",
    date: "",
    isActive: false,
    isComplete: false,
    isValidated: false
  };
  style = {
    isValid: {
      borderColor: "#03fc8c"
    },
    isInvalid: {
      borderStyle: "solid",
      borderColor: "coral"
    }
  };
  create() {
    if (this.state.description === "") {
      this.setState({ isValidated: true });
      return;
    }

    if (this.state.date === "") {
      this.setState({ isValidated: true });
      return;
    }
    delete this.state.isValidated;
    this.props.createTodo(this.state);
    this.setState({ description: "", date: "", isValidated: false });
  }
  render() {
    return (
      <div
        className={{
          display: "grid",
          "grid-template-columns": "auto",
          "grid-column-gap": "10px"
        }}
      >
        <div>
          <input
            style={
              this.state.isValidated ? this.style.isInvalid : this.style.isValid
            }
            type="text"
            placeholder="Enter todo date"
            value={this.state.description}
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
          <input
            style={
              this.state.isValidated ? this.style.isInvalid : this.style.isValid
            }
            type="text"
            placeholder="Enter todo date"
            value={this.state.date}
            onChange={e => {
              this.setState({ date: e.target.value });
            }}
          />
        </div>
        <button onClick={this.create.bind(this)}>Create Todo</button>
      </div>
    );
  }
}
