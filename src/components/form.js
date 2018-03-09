import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addTodo,
  removeTodo,
  markAsResolved,
  showResolved,
  showUnResolved
} from "../redux/actions";

import { Button } from "./buttons";

const actionCreators = dispatch =>
  bindActionCreators(
    { addTodo, removeTodo, markAsResolved, showResolved, showUnResolved },
    dispatch
  );

const mapStateToProps = store => ({
  todos: store.todos,
  filter: store.filter
});

class Form extends Component {
  submitTodo() {
    if (this.textInput.value !== "") {
      this.props.addTodo(this.textInput.value);
    }

    this.textInput.value = "";
  }
  visibilityFilter(todos, filter) {
    switch (filter) {
      case "RESOLVED":
        return todos.filter(todo => todo.completed === true);

      case "UNRESOLVED":
        return todos.filter(todo => todo.completed === false);
      default:
        return todos;
    }
  }
  render() {
    const filteredTodos = this.visibilityFilter(
      this.props.todos,
      this.props.filter
    );
    return (
      <div>
        <input
          ref={input => (this.textInput = input)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.submitTodo();
            }
          }}
        />
        <Button buttonTitle="Submit TODO" onClick={() => this.submitTodo()} />
        <ul>
          {filteredTodos.map((todo, index) => (
            <div>
              <li
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}
              </li>
              <Button
                buttonTitle="Remove Todo"
                onClick={() => this.props.removeTodo(index)}
              />
              <Button
                buttonTitle={todo.completed ? "Resolved" : "Resolve"}
                onClick={() => this.props.markAsResolved(index)}
              />
            </div>
          ))}
        </ul>
        <a
          href="#"
          style={{
            visibility: this.props.todos.length === 0 ? "hidden" : "visible"
          }}
          onClick={() => this.props.showResolved()}
        >
          resolved
        </a>{" "}
        <a
          href="#"
          style={{
            visibility: this.props.todos.length === 0 ? "hidden" : "visible"
          }}
          onClick={() => this.props.showUnResolved()}
        >
          unresolved
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
