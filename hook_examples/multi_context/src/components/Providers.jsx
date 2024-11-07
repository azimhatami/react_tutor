import { UserProvider, useUser} from '../context/UserContext';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

function Providers({children}) {
  return(
    <>
      <UserProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default Providers;
