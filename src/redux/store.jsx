// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancer = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancer);


// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
   reducer: {
      filters: filtersSlice.reducer,
      todoList: todoSlice.reducer
   }
})

export default store;