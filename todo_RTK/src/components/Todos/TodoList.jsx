import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos)
  return(
    <>
      <h2 className='mt-[1.5rem] text-start text-[2rem] font-semibold text-stone-600 border-b-2'>Todo List</h2>
      <ul className='mt-[1.5rem]'>
        {
          todos.map((todo) => (<TodoItem key={todo.id} {...todo} />))
        }
      </ul>
    </>
  );
};


export default TodoList;
