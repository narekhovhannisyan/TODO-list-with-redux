import React, { Component } from 'react'
import Form from './form'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Form/>
      </Provider>
    )
  }
}

export default App
