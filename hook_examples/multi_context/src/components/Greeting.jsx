import { useUser } from '../context/UserContext';

function Greeting() {
  const {user} = useUser();
  return(
    <>
      <p>You logged in as {user.name}</p>
    </>
  );
}

export default Greeting;
