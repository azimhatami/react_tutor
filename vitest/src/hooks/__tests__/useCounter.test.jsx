import { useCounter } from '../useCounter';
import { test, describe, expect } from 'vitest';
import { renderHook, screen, act } from '@testing-library/react';


describe('useCounter hook', () => {
  test('Should render the initial value #1', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0)
  });

  test('Should render the same value as initial count #2', () => {
    const { result } = renderHook(useCounter, {initialProps: 10});
    expect(result.current.count).toBe(10)
  });

  test('Should increment the count #3', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  test('Should decrement the count #4', () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
})

