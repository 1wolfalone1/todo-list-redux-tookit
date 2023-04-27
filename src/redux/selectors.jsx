import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;

export const filterStatusSelector = (state) => state.filters.status;

export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, search, priorities) => {
        console.log(todoList, 'list')
        
        return todoList.filter((todo) => {
            let prioritiesCheck = true;
            let statusCheck = true;

            if(priorities.length === 0) {
                prioritiesCheck = true;
            } else {
                prioritiesCheck = priorities.includes(todo.priority)
            }
            switch(status) {
                case 'All':
                    statusCheck = true;
                    break;
                case 'Completed':
                    statusCheck = todo.completed === true;
                    break;
                case 'Todo':
                    statusCheck = todo.completed === false;
                    break;
                default:
                    statusCheck = true;
                    break;
            }
            return todo.name.includes(search) && statusCheck && prioritiesCheck;
        })
    }
)
