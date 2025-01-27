import App from './App';
import { test } from 'vitest';
import { render, screen } from '@testing-library/react';


test('App test', () => {
  render(<App />);
  const titleElement = screen.getByText(/Wellcome to testing React Apps/);
  expect(titleElement).toBeInTheDocument();
  screen.debug();
})
