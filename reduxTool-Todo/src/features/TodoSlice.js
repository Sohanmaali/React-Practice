import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const addTodoItem = (state, action) => {
  const todo = { id: nanoid(), text: action.payload };
  state.todos.push(todo);
};
const removeTodoItem = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoItem,
    removeTodo: removeTodoItem,
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
