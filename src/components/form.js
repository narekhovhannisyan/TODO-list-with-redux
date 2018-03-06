import React, { Component } from 'react'
import { store } from '../redux/store'

class Form extends Component {
  render () {
    return <div>
      <input ref={input => this.textInput = input}/>
      <button onClick={() => store.dispatch({
        type: 'ADD_TODO',
        text: this.textInput.value
      })}
      >Submit
      </button>
    </div>
  }
}
