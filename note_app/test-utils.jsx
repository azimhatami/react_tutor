import React from 'react'
import {render} from '@testing-library/react'
import { NotesProvider } from './src/context/NotesContext'

const AllTheProviders = ({children}) => {
  return (
    <NotesProviders>
      {children}
    </NotesProviders>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
