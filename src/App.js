import React, { Component } from 'react'
import { Form, Row } from './components/form'
import { SubmitButton, RemoveButton } from './components/buttons'
import { Loader } from './components/loader'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [],
      dotCount: 0,
      dotMaxCount: 5
    }
  }

  submitValue = newTodo => {
    if (newTodo !== '') {
      const objectToPush = {
        title: newTodo,
        isActive: false
      }

      this.setState({
        list: [...this.state.list, objectToPush]
      })
    }
  }

  submitSuccess = index => {
    const title = this.state.list[index].title

    this.setState({
      list: [
        ...this.state.list.slice(0, index),
        {
          title,
          isActive: true
        },
        ...this.state.list.slice(index + 1)
      ]
    })
  }

  removeRow = (index) => {
    const newList = [...this.state.list.slice(0, index), ...this.state.list.slice(index + 1)]

    this.setState({
      list: newList
    })
  }

  incrementCount = () => {
    const count = this.state.dotCount < this.state.dotMaxCount - 1 ? this.state.dotCount + 1 : 0

    this.setState({
      ...this.state,
      dotCount: count
    })
  }

  render () {
    return (
      <div className="App">
        <Form buttonName={'Submit'}
              submitValue={this.submitValue}
        />
        {
          <Loader
            loadCount={this.state.dotCount}
            incrementist={this.incrementCount}
          />
        }
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <Row
                color={item.isActive ? 'green' : 'black'}
                value={item.title}
              />
              <SubmitButton elemIndex={index}
                            onClick={this.submitSuccess}
              />
              <RemoveButton elemIndex={index}
                            onClick={(rowToRemove) => this.removeRow(rowToRemove)}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
