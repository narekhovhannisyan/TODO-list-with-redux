export default
const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: state.length,
        text: action.text,
        completed: false
      }]
  }
}
