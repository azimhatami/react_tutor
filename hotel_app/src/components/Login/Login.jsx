import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('1234');
  const navigate = useNavigate();

  const { user, login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) login(email, password)
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/', {replace: true})
  }, [isAuthenticated, navigate])
  return(
    <>
      <div className='border-solid border-slate-400 border-[1px] w-[24rem] h-[20rem] m-auto rounded-lg px-[2rem]'>
        <h2 className='text-[1.8rem] my-[1rem]'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-start mb-[1.3rem]'>
            <label className='mb-[0.2rem] text-slate-100'>Email: </label>
            <input type='email' placeholder='Please enter email' className='w-full border-solid border-slate-700 border-[1.5px] rounded-lg outline-none px-2 py-1' />
          </div>
          <div className='flex flex-col items-start mb-[1.5rem]'>
            <label className='mb-[0.2rem] text-slate-100'>Email: </label>
            <input type='text' placeholder='Please enter password' className='w-full border-solid border-slate-700 border-[1.5px] rounded-lg outline-none px-2 py-1' />
          </div>
          <button 
            className='outline-none bg-blue-500 w-full rounded-lg my-[1rem] py-[1px] font-medium hover:text-slate-100 hover:shadow-lg hover:shadow-blue-500/30'
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}



export default Login;
