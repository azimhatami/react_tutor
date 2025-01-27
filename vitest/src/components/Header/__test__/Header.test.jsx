import Header from '../Header';

import { test, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';


describe('Header Components', () => {
  // getByText methods
  it('Header test #1', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.getByText(/Title Test/);
    expect(titleHeader).toBeInTheDocument();
  });

  // getByRole methods
  it('Header test #2', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.getByRole('heading', {name: /test/i});
    expect(titleHeader).toBeInTheDocument();
  });

  // getByTitle methods
  it('Header test #3', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.getByTitle('header');
    expect(titleHeader).toBeInTheDocument();
  });

  // getByTestId methods
  it('Header test #4', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.getByTestId('header-2');
    expect(titleHeader).toBeInTheDocument();
  });

  // findByText methods
  it('Header test #5', async () => {
    render(<Header title='Title Test' />);
    const titleHeader = await screen.findByText(/test/i);
    expect(titleHeader).toBeInTheDocument();
  });

  // queryByText methods
  it('Header test #6', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.queryByText(/react/i);
    expect(titleHeader).not.toBeInTheDocument();
  });

  // getAllByRole
  it('Header test #7', () => {
    render(<Header title='Title Test' />);
    const titleHeader = screen.getAllByRole('heading');
    expect(titleHeader.length).toBe(2);
  });
})
