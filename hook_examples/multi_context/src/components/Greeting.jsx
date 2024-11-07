import { useContext } from 'react';
import { CurrentUserContext } from '../App';

function Greeting() {
  const {currentUser} = useContext(CurrentUserContext);
  return(
    <>
      <p>You logged in as {currentUser.name}</p>
    </>
  );
}

export default Greeting;
