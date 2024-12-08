import TodoItem from './TodoItem'


const TodoList = () => {
  return(
    <>
      <h2 className='mt-[1.5rem] text-start text-[2rem] font-semibold text-stone-600 border-b-2'>Todo List</h2>
      <ul className='mt-[1.5rem]'>
        <TodoItem />
      </ul>
    </>
  );
};


export default TodoList;
