import { render, screen, fireEvent } from '../../../test-utils';
import { expect, test, describe } from 'vitest';
import { NotesProvider } from '../../context/NotesContext'

import NoteApp from '../NoteApp';


function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  const inputDesc = screen.getByPlaceholderText(/Note description/i);
  const button = screen.getByRole('button', { name: /Add New Note/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title }})
    fireEvent.change(inputDesc, { target: { value: note.description }})
    fireEvent.click(button)
  })
}


describe('NoteApp Component', () => {
  test('Should input be empty after submit #1', () => {
    render(<NoteApp sortBy='latest' />, { wrapper: NotesProvider })
    const inputTitle = screen.getByPlaceholderText(/Note title/i);
    addNote([
      { title: 'Note title', description: 'Note description' }
    ])
    expect(inputTitle.value).toBe('')
  });

  test('Should add multiple todos #2', () => {
    render(<NoteApp sortBy='latest' />, { wrapper: NotesProvider })
    addNote([
      { title: 'Note title', description: 'Note description' },
      { title: 'Note title', description: 'Note description' },
      { title: 'Note title', description: 'Note description' },
    ]);
    const todoList = screen.getAllByText(/Note title/i)
    expect(todoList.length).toBe(3)
  });

  test('Should check class when rendered #3', () => {
    render(<NoteApp sortBy='latest' />, { wrapper: NotesProvider })
    addNote([{ title: 'Note title', description: 'Note description' }])
    const divElement = screen.getByTestId('note-id')
    expect(divElement).not.toHaveClass('note_completed')
  });

  test('Should have active class when todo clicked #4', () => {
    render(<NoteApp sortBy='latest' />, { wrapper: NotesProvider })
    addNote([{ title: 'Note title', description: 'Note description' }])
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    const divElement = screen.getByTestId('note-id')
    expect(divElement).toHaveClass('note_completed')
  })
})
