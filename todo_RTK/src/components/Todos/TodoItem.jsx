const TodoItem = () => {
  return(
    <>
      <li className='bg-neutral-100 rounded-xl'>
        <div className='flex flex-rows items-center justify-between p-2'>
          <div className='flex flex-rows gap-6'>
            <input type='checkbox'/>
            <span className='font-semibold text-gray-700'>todo title</span>
          </div>
          <button className='bg-red-700 rounded-lg px-2 py-1 text-slate-50 font-semibold'>Delete</button>
        </div>
      </li>
    </>
  );
};


export default TodoItem;
