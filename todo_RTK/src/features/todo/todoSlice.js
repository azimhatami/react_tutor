import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [];
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: state.payload.title,
        completed: false
      };
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action) => {
      const selectTodo = state.todos.find(todo => todo.id === Number(action.payload.id));
      selectTodo.completed = !selectTodo.completed
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== Number(action.payload.id))
    }
  }
})


export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
