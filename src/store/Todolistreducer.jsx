
const defaultState = {
  todos: [],
};

const Todolistreducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), task: action.payload }],
      };

    case "REMOVE_TASK":
      const updatedTodos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
      return {
        ...state,
        todos: updatedTodos,
      };

    case "LOAD_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default Todolistreducer;
