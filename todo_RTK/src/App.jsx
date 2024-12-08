import { useState } from 'react';
import AddTodoForm from './components/Todos/AddTodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';


function App() {

  return (
    <>
      <AddTodoForm />
      <TodoList />
    </>
  )
}

export default App
