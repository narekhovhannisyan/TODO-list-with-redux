import React, { Component } from 'react'
import { Button } from './buttons'

export class Submit extends Component {
  constructor () {
    super()
    this.state = { text: '' }
  }

  render () {
    return (
      <React.Fragment>
        <input
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.props.submitTodo(this.state.text)
            }
          }}
        />
        <Button buttonTitle="Submit TODO" onClick={() => this.props.submitTodo(this.state.text)}/>
      </React.Fragment>
    )
  }
}
