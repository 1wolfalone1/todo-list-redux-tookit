import filterReducers from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoSlice";


const rootReducer = (state = {}, action) => {
   return {
      filters: filterReducers(state.filters, action),
      todoList: todoListReducer(state.todoList, action),
   }
};

export default rootReducer;