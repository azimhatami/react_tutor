const AddTodoForm = () => {
  return(
    <>
      <form className='flex flex-col gap-4'>
        <label className='text-blue-500 font-semibold text-[2rem] text-start'>Add Todo</label>
        <input 
          autoComplete='off' 
          id='name' 
          type='text' 
          className='border-solid border-[2px] border-slate-200 rounded-lg \
            px-4 py-2 outline-none text-[1.1rem] font-semibold'  
          placeholder='Add todo' 
        />
        <button 
          type='submit' 
          className='bg-blue-500 text-slate-100 font-bold rounded-lg p-1 \
            outline-none'
        >
          Submit
        </button>
      </form>
    </>
  );
};


export default AddTodoForm
