const initState = [
   {
      id: 1123213123123,
      name: "Learn yoga",
      completed: false,
      priority: "Medium",
   },
   {
      id: 244444444444444,
      name: "Learn java",
      completed: true,
      priority: "Medium",
   },
   {
      id: 32323231313,
      name: "Learn gym",
      completed: false,
      priority: "Medium",
   },
];
const todoListReducer = (state = initState, action) => {
   switch (action.type) {
      case "todoList/addTodo":
         return [...state, action.payload];
      case "todoList/toggleTodoStatus":
         return state.map((todo) =>
            todo.id === action.payload
               ? { ...todo, completed: !todo.completed }
               : { ...todo }
         );
      default:
         return state;
   }
};

export default todoListReducer;
