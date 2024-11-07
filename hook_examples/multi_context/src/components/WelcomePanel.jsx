import {useUser} from '../context/UserContext';
import Panel from './Panel';
import Greeting from './Greeting';
import LoginForm from './LoginForm';

function WelcomePanel({children}) {
  const {user} = useUser();
  return(
    <>
      <Panel title='Welcome'>
        {user !== null ? <Greeting/> : <LoginForm />}
      </Panel>
    </>
  );
}

export default WelcomePanel;
