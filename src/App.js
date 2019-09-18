import React from "react";
import { connect } from "react-redux";

import "./App.css";
import TodoForm from "./components/todo-form";
import TodoItem from "./components/todo-item";
import Header from "./components/header";
import * as actions from "./actions";

class App extends React.Component {
  // state = {
  //   todos: [
  //     {
  //       id: 0,
  //       description: "Remind me to take my girl out",
  //       date: "27/03/2019",
  //       isActive: false,
  //       isComplete: false
  //     },
  //     {
  //       id: 1,
  //       description: "Remind me to visit my family in MP",
  //       date: "20/04/2019",
  //       isActive: false,
  //       isComplete: false
  //     },
  //     {
  //       id: 2,
  //       description: "Remind me to plan the next Trip",
  //       date: "13/05/2019",
  //       isActive: false,
  //       isComplete: false
  //     },
  //     {
  //       id: 3,
  //       description: "Remind me It's my baby Siya's birthday",
  //       date: "04/02/2019",
  //       isActive: false,
  //       isComplete: false
  //     },
  //     {
  //       id: 4,
  //       description: "Remind me It's our anniversary",
  //       date: "27/05/2020",
  //       isActive: false,
  //       isComplete: false
  //     }
  //   ]
  // };

  activateHandler(todo) {
    // const data = this.props.todos;
    // for (var i = 0; i < data.length; i++) {
    //   if (data[i].id === todo.id) {
    //     data.splice(i, 1);
    //   }
    // }
    // this.setState({ todos: data });
    this.props.removeTodo(todo);
  }
  createTodo(data) {
    data.id = this.props.todos.length;
    // data = [...this.props.todos, data];
    //this.setState({ todos: data });
    this.props.createTodo(data);
  }
  handleComplete(todo) {
    // const __ = this.props.todos;
    // __.forEach(x => {
    //   if (x.id === todo.id) {
    //     x.isComplete = x.isComplete ? false : true;
    //   }
    // });
    // this.setState({ todos: __ });
    this.props.completeTodo(todo);
  }
  render() {
    console.log(this.props.todos);
    return (
      <div className="App">
        <Header />
        <TodoForm createTodo={this.createTodo.bind(this)} />
        <div>
          {this.props.todos &&
            this.props.todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                activateHandler={this.activateHandler.bind(this)}
                complete={this.handleComplete.bind(this)}
              />
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos.todos
});
const mapDispatchToProps = dispatch => ({
  createTodo: data => dispatch(actions.createTodo(data)),
  completeTodo: data => dispatch(actions.completeTodo(data)),
  removeTodo: data => dispatch(actions.removeTodo(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
