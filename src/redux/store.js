import { createStore } from 'redux'
import toDoReducer from '../reducers/todo'

export const store = createStore(toDoReducer)
