import { useTheme } from '../context/ThemeContext';

function Button({ children, disabled, onClick }) {
  const {theme} = useTheme();
  const className = 'button-' + theme;
  return(
    <>
      <button className={className} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default Button;
