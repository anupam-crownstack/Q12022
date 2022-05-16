const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((item) => item.id !== action.payload);
      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return { ...state, list: [] };

    default:
      return state;
  }
};

export default todoReducer;
