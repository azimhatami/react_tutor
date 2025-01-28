import { useCounter } from '../../hooks/useCounter';

function Counter() {
  const { count, decrement, increment } = useCounter();
  return(
    <>
      <h2>{ count }</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}


export default Counter
