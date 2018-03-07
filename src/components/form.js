import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addTodo, removeTodo, markAsResolved } from '../redux/actions'

import { Button } from './buttons'

const actionCreators = dispatch => bindActionCreators({ addTodo, removeTodo, markAsResolved }, dispatch)

const mapStateToProps = store => ({
  todos: store.todos
})

class Form extends Component {
  submitTodo () {
    if (this.textInput.value !== '') {
      this.props.addTodo(this.textInput.value)
    }

    this.textInput.value = ''
  }

  render () {
    return (
      <div>
        <input ref={input => (this.textInput = input)}
               onKeyPress={event => {
                 if (event.key === 'Enter') {
                   this.submitTodo()
                 }
               }}/>
        <Button buttonTitle='Submit TODO'
                onClick={() => this.submitTodo()}
        />
        <ul>{this.props.todos.map((todo, index) =>
          <div>
            {todo.completed}
            <li style={{ textDecoration: 'line-through' }}>{todo.text}</li>
            <Button buttonTitle='Remove Todo'
                    onClick={() => this.props.removeTodo(index)}/>

          </div>
        )}</ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
