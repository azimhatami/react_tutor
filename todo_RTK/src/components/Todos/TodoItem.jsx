import { useDispatch } from 'react-redux';


const TodoItem = ({ id, title, completed }) => {

  const dispatch = useDispatch();

  return(
    <>
      <li className='bg-neutral-100 rounded-xl'>
        <div className='flex flex-rows items-center justify-between p-2'>
          <div className='flex flex-rows gap-6'>
            <input 
              type='checkbox' 
              onChange={(e) => dispatch(toggleTodo({id}))}
            />
            <span className='font-semibold text-gray-700'>{ title }</span>
          </div>
          <button 
            className='bg-red-700 rounded-lg px-2 py-1 text-slate-50 font-semibold'
            onClick={() => dispatch(deleteTodo({ id }))}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};


export default TodoItem;
