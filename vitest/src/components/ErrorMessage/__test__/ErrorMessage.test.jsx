import ErrorMessage from '../ErrorMessage';

import { test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';


describe('ErrorMessage Components', () => {
  test('Error test #1', () => {
    render(<ErrorMessage count={1}/>)
    const pElement = screen.getByText(/1 error occurred/i)
    expect(pElement).toBeInTheDocument();
  });

  test('Error test #2', () => {
    render(<ErrorMessage count={2}/>)
    const pElement = screen.getByText(/2 errors occurred/i)
    expect(pElement).toBeTruthy();
  });

  test('Error test #3', () => {
    render(<ErrorMessage count={2}/>)
    const pElement = screen.getByText(/2 errors occurred/i)
    expect(pElement).toBeVisible();
  });

  test('Error test #4', () => {
    render(<ErrorMessage count={2}/>)
    const pElement = screen.getByText(/2 errors occurred/i)
    expect(pElement).toHaveTextContent('2 Errors occurred');
  });
  
  test('Error test #5', () => {
    render(<ErrorMessage count={2}/>)
    const pElement = screen.getByText(/2 errors occurred/i)
    expect(pElement).not.toBeFalsy()
  });

  test('Error test #6', () => {
    render(<ErrorMessage count={2}/>)
    const pElement = screen.getByText(/2 errors occurred/i)
    expect(pElement.textContent).toBe('2 Errors occurred')
  });

//  test('Error test #7', () => {
//    render(<ErrorMessage count={2}/>)
//    const pElement = screen.getByText(/2 errors occurred/i)
//    expect(pElement).toContainHTML('<span>hi</span>')
//  });
//
//  test('Error test #8', () => {
//    render(<ErrorMessage count={2}/>)
//    const pElement = screen.getByText(/2 errors occurred/i)
//    const spanElement = screen.getByText(/hi/i)
//    expect(pElement).toContainElement(spanElement)
//  });
})
