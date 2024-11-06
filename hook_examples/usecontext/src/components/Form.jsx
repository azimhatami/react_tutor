import Panel from './Panel';
import Button from './Button';

export default function Form({theme}) {
  return(
    <>
      <Panel title='Welcome' >
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    </>
  );
}
