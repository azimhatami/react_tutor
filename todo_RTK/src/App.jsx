import { useState } from 'react'
import store from './features/store';
import { Provider } from 'react-redux'
import './App.css'


function App() {

  return (
    <>
      <Provider store={store}>
        <h2 className='text-blue-500'>Todo RTK</h2>
      </Provider>
    </>
  )
}

export default App
