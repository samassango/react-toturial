import * as constants from "../constants";
const initialState = {
  todos: [
    {
      id: 0,
      description: "Remind me to take my girl out",
      date: "27/03/2019",
      isActive: false,
      isComplete: false
    },
    {
      id: 1,
      description: "Remind me to visit my family in MP",
      date: "20/04/2019",
      isActive: false,
      isComplete: false
    },
    {
      id: 2,
      description: "Remind me to plan the next Trip",
      date: "13/05/2019",
      isActive: false,
      isComplete: false
    },
    {
      id: 3,
      description: "Remind me It's my baby Siya's birthday",
      date: "04/02/2019",
      isActive: false,
      isComplete: false
    },
    {
      id: 4,
      description: "Remind me It's our anniversary",
      date: "27/05/2020",
      isActive: false,
      isComplete: false
    }
  ]
};

const todoReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case constants.CREATE_TODO_ITEM: {
      const data = {
        id: actions.payload.id,
        date: actions.payload.date,
        description: actions.payload.description,
        isActive: false,
        isComplete: false
      };
      return { ...state, todos: [...state.todos, data] };
    }
    case constants.REMOVE_TODO_ITEM: {
      const data = state.todos;
      data.forEach((todo, index) => {
        if (todo.id === actions.payload.id) {
          data.splice(index, 1);
        }
      });
      return {
        ...state,
        todos: [...data]
      };
    }
    case constants.COMPLETE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === actions.payload.id
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    }
    default:
      return state;
  }
};
export default todoReducer;
