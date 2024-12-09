import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAsyncTodos } from '../../features/todo/todoSlice';


const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos())
  }, [])

  return(
    <>
      <h2 className='mt-[1.5rem] text-start text-[2rem] font-semibold text-stone-600 border-b-2'>Todo List</h2>
      {
        loading ? <p>Loading</p> : error ? <p>{error}</p> : (
          <ul className='mt-[1.5rem] flex flex-col gap-3'>
            {
              todos.map((todo) => (<TodoItem key={todo.id} {...todo} />))
            }
          </ul>

        )
      }
    </>
  );
};


export default TodoList;
