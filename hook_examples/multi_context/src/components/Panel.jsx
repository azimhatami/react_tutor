import {useTheme} from '../context/ThemeContext';

function Panel({title, children}) {
  const {theme} = useTheme();
  const className= 'panel-' + theme
  return(
    <>
      <section className={className}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

export default Panel;
