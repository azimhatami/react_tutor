import Panel from './Panel';
import Button from './Button';

export default function Form({theme}) {
  return(
    <>
      <Panel title='Welcome' theme={theme}>
        <Button theme={theme}>Sign up</Button>
        <Button theme={theme}>Log in</Button>
      </Panel>
    </>
  );
}
