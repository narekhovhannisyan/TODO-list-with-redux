export const addTodo = text => {
  return {
    type: "ADD_TODO",
    value: text
  };
};

export const removeTodo = index => {
  return {
    type: "REMOVE_TODO",
    value: index
  };
};

export const markAsResolved = index => {
  return {
    type: "CHANGE_STATE",
    value: index
  };
};
