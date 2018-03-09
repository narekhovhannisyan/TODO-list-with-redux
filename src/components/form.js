import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button } from "./buttons";
import { Submit } from "./submit";

import {
  addTodo,
  showAll,
  removeTodo,
  showResolved,
  addTodoSilent,
  showUnResolved,
  markAsResolved
} from "../redux/actions";

const actionCreators = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo,
      markAsResolved,
      showResolved,
      showUnResolved,
      addTodoSilent,
      showAll
    },
    dispatch
  );

const mapStateToProps = store => ({
  todos: store.todos,
  filter: store.filter
});

class Form extends Component {
  visibilityFilter(todos, filter) {
    switch (filter) {
      case "RESOLVED":
        return todos.filter(todo => todo.completed === true);
      case "UNRESOLVED":
        return todos.filter(todo => todo.completed === false);
      case "SHOW=ALL":
        return todos;
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
        <Submit submitTodo={text => this.props.addTodo(text)} />
        <Submit submitTodo={text => this.props.addTodoSilent(text)} />
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
          RESOLVED
        </a>{" "}
        <a
          href="#"
          style={{
            visibility: this.props.todos.length === 0 ? "hidden" : "visible"
          }}
          onClick={() => this.props.showUnResolved()}
        >
          UNRESOLVED
        </a>{" "}
        <a
          href="#"
          style={{
            visibility: this.props.todos.length === 0 ? "hidden" : "visible"
          }}
          onClick={() => this.props.showAll()}
        >
          SHOW ALL
        </a>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
