export const addTodo = text => {
  if (text !== '') {
    return {
      type: 'ADD_TODO',
      value: text
    }
  }
}

export const removeTodo = index => {
  return {
    type: 'REMOVE_TODO',
    value: index
  }
}

export const markAsResolved = index => {
  return {
    type: 'CHANGE_STATE',
    value: index
  }
}
export const showUnResolved = () => {
  return {
    type: 'FILTER_UNRESOLVED',
    filter: 'UNRESOLVED'
  }
}

export const showResolved = () => {
  return {
    type: 'FILTER_RESOLVED',
    filter: 'RESOLVED'
  }
}
export const showAll = () => {
  return {
    type: 'SHOW_ALL',
    filter: 'NONE'
  }
}
