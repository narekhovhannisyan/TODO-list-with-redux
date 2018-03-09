const initialState = {
  todos: []
}

export default function todos (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.value,
            completed: false
          }
        ]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.value),
          ...state.todos.slice(action.value + 1)
        ]
      }
    case 'CHANGE_STATE':
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.value),
          {
            ...state.todos[action.value],
            completed: !state.todos[action.value].completed
          },
          ...state.todos.slice(action.value + 1)
        ]
      }
    case 'FILTER_RESOLVED':
      return {
        ...state,
        filter: action.filter
      }
    case 'FILTER_UNRESOLVED':
      return {
        ...state,
        filter: action.filter
      }
    case 'SHOW_ALL':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}
