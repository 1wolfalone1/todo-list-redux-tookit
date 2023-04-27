// const initState = {
//    search: "",
//    status: "All",
//    priorities: [],
// };

// const filterReducers = (state = initState, action) => {
//    switch (action.type) {
//       case "filters/searchFilterChange":
//          return {
//             ...state,
//             search: action.payload,
//          };

//       case "filters/statusFilterChange":
//          return {
//             ...state,
//             status: action.payload,
//          };
//       case 'filters/priorityFilterChange':
//          return {
//             ...state,
//             priorities: action.payload
//          }
//       default:
//          return state;
//    }
// };

// export default filterReducers;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
   name: "filters",
   initialState: {
      search: "",
      status: "All",
      priorities: [],
   },
   reducers: {
      searchFilterChange: (state, action) => {
         //mutation || IMMER lib from redux toolkit
         state.search = action.payload;
      },// => {type: '${name}/${reducer_name}'}
      statusFilterChange: (state, action) => {
         state.status = action.payload;
      },
      priorityFilterChange: (state, action) => {
         state.priorities = action.payload;
      }
   }
});
