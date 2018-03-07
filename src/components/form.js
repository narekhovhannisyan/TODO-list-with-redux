import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../redux/store";

import { addTodo } from "../redux/actions";

const actionCreators = dispatch => bindActionCreators({ addTodo }, dispatch);

const mapStateToProps = store => ({
  todos: store.todos
});

class Form extends Component {
  render() {
    return (
      <div>
        <input ref={input => (this.textInput = input)} />
        <button onClick={() => this.props.addTodo(this.textInput.value)}>
          Submit
        </button>
        <ul>{this.props.todos.map(todo => <li>{todo.text}</li>)}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Form);
