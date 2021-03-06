/**
 * here context for our todo list is handled 
 */
import { createTodo, fetchTodos, createTask, updateTask, deleteTodo } from '../exertion/todos';
import CreateContext from './CreateContext';
import todosReducer from '../reducers/task';
export const initialState = {
    createTodoError: '',
    fetchTodosError: '',
    todos: []
};

export const { Context, Provider } = CreateContext(
    todosReducer,
    { createTodo, fetchTodos, createTask, updateTask, deleteTodo },
    initialState
);