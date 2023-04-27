import filterReducers from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";
import { combineReducers } from "redux";


// const rootReducer = (state = {}, action) => {
//    return {
//       filters: filterReducers(state.filters, action),
//       todoList: todoListReducer(state.todoList, action),
//    }
// };

const rootReducer = combineReducers({
   filters: filterReducers,
   todoList: todoListReducer
})

export default rootReducer;