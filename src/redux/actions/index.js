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
export const showUnResolved = () => {
  return {
    type: "FILTER-UNRESOLVED",
    filter: "UNRESOLVED"
  };
};

export const showResolved = () => {
  return {
    type: "FILTER-RESOLVED",
    filter: "RESOLVED"
  };
};
