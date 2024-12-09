import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// http://localhost:5000/todos

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const getAsyncTodos = createAsyncThunk('todos/getAsyncTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch(error) {
    return rejectWithValue(error.message);
  }
})

export const addAsyncTodo = createAsyncThunk('todos/addAsyncTodo', async (payload, { rejectWithValue }) => {
  try {
    const response = await api.post('/todos', {
      title: payload.title,
      id: Date.now(),
      completed: false
    });
    return response.data;
  } catch(error) {
    return rejectWithValue(error.message);
  }
})

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
    error: ''
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state, action) => {
        state.loading = true;
        state.todos = [];
        state.error = '';
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = '';
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.loading = false;
        state.todos = [];
        state.error = action.payload;
      })
      .addCase(addAsyncTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
  }
})


export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
