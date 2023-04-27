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

export const statusFilterChange = (status) => {

   return {
      type: 'filters/statusFilterChange',
      payload: status
   }
}

export const priorityFilterChange = (priorities) => {
   return {
      type: 'filters/priorityFilterChange',
      payload: priorities
   }
}

export const toggleTodoStatus = (id) => {
   return {
      type: 'todoList/toggleTodoStatus',
      payload: id
   }
}