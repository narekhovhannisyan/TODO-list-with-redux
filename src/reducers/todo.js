const initialState = {
  todos: []
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.text,
            completed: false
          }
        ]
      };
    default:
      return state;
  }
}
