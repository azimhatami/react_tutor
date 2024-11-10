import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // push user to dashboard
    navigate('/dashboard')
  }

  return(
    <>
      <h2>Login</h2>
      <form>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
}

export default Login;
