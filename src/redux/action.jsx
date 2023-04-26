export const addTodoAction = (payload) => {
   return {
      type: "todoList/addTodo",
      payload: payload,
   };
};

export const searchFilterChange = (payload) => {

   return {
      type: 'filters/searchFilterChange',
      payload: payload,
   }
}
