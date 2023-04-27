// const initState = [
//    {
//       id: 1123213123123,
//       name: "Learn yoga",
//       completed: false,
//       priority: "Medium",
//    },
//    {
//       id: 244444444444444,
//       name: "Learn java",
//       completed: true,
//       priority: "Medium",
//    },
//    {
//       id: 32323231313,
//       name: "Learn gym",
//       completed: false,
//       priority: "Medium",
//    },
// ];
// const todoListReducer = (state = initState, action) => {
//    switch (action.type) {
//       case "todoList/addTodo":
//          return [...state, action.payload];
//       case "todoList/toggleTodoStatus":
//          return state.map((todo) =>
//             todo.id === action.payload
//                ? { ...todo, completed: !todo.completed }
//                : { ...todo }
//          );
//       default:
//          return state;
//    }
// };

// export default todoListReducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const createSliceTmp = createSlice({
   name: "todoList",
   initialState: { status: "idle", todos: [] },
   reducers: {
      addTodo: (state, action) => {
         state.push(action.payload);
      }, //action creator,
      toggleTodoStatus: (state, action) => {
         const currentTodo = state.find((todo) => todo.id === action.payload);
         currentTodo.completed = !currentTodo.completed;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchTodos.pending, (state, action) => {
            state.status = "loading";
         })
         .addCase(fetchTodos.fulfilled, (state, action) => {
            state.todos = action.payload;
            state.status = "idle";
         })
         .addCase(addNewTodo.fulfilled, (state, action) => {
            console.log(state, "----------------------", action);
            state.todos.push(action.payload);
         })
         .addCase(updateTodo.fulfilled, (state, action) => {
            const currentTodo = state.todos.find(
               (todo) => todo.id === action.payload
            );
            currentTodo.completed = !currentTodo.completed;
         });
   },
});

export default createSliceTmp;

export const fetchTodos = createAsyncThunk("todes/fetchTodos", async () => {
   const res = await fetch("/api/todos");
   const data = await res.json();
   return data.todos;
});

export const addNewTodo = createAsyncThunk(
   "todos/addNewTodo",
   async (newTodo) => {
      const res = await fetch("/api/todos", {
         method: "POST",
         body: JSON.stringify(newTodo),
      });
      const data = await res.json();
      return data.todos;
   }
);

export const updateTodo = createAsyncThunk(
   "todos/updateTodo",
   async (updateTodo) => {
      const res = await fetch("/api/updateCompletedTodo", {
         method: "POST",
         body: JSON.stringify(updateTodo),
      });
      const data = await res.json();
      return updateTodo;
   }
);
// => todoes/fetchTodos/pending
// => todoes/fetchTodos/fullfilled
// => todoes/fetchTodos/rejected

// export const addTodos = (todo) => {
//    return (dispatch, getState) => {
//       console.log('[addTodosThunk]', getState())
//       console.log({...todo}, 'name before')
//       todo.name = 'Thien ahihi'
//       dispatch(createSliceTmp.actions.addTodo(todo));
//       console.log('[addTodosThunk after]', getState())
//    }
// }
