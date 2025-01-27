import App from './App';
import { test, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';


describe('App Component', () => {
  it('renders the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/App/);
    expect(titleElement).toBeInTheDocument();
    screen.debug();
  })
})
