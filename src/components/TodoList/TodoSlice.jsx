const initState = [
   {
      id: 1,
      name: "Learn yoga",
      completed: false,
      priority: "Medium",
   },
   {
      id: 2,
      name: "Learn yoga",
      completed: false,
      priority: "Medium",
   },
   {
      id: 3,
      name: "Learn yoga",
      completed: false,
      priority: "Medium",
   },
];
const todoListReducer = (state = initState, action) => {
   switch (action.type) {
      case "todoList/addTodo":
         return [...state, action.payload];
      default:
         return state;
   }
};

export default todoListReducer;
