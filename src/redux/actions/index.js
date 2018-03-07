export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    value: text
  }
}

export const removeTodo = index => {
  return {
    type: 'REMOVE_TODO',
    value: index
  }
}

export const changeTodosState = index => {
  return {
    type: 'CHANGE_STATE',
    value: index
  }
}
