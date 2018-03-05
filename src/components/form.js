import React, { Component } from 'react'

export class Form extends Component {
  submitHandler () {
    this.props.submitValue(this.textInput.value)
  }

  render () {
    return (
      <div>
        <input
          ref={input => {this.textInput = input}}
          onKeyPress={(event) => {
            console.log('onKeyPress log this: ', event.key)
            if (event.key === 'Enter') {
              this.submitHandler()
            }
          }}
        />
        <button onClick={() => this.submitHandler()}>
          {`${this.props.buttonName}`}
        </button>
      </div>
    )
  }
}

export const Row = (props) => {
  return (<h2 style={{ color: props.color }}>{props.value}</h2>)
}
